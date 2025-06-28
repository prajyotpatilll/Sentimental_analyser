import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
dotenv.config();

// GNews API Key
const GNEWS_API_KEY = process.env.API_KEY;

// Python Sentiment API URL
const PYTHON_API_URL = 'https://sentimental-analyser.onrender.com/sentiment';

// News Fetch Route using top-headlines
app.get('/news', async (req, res) => {
    try {
        const category = req.query.category || 'general'; // Default to 'general' if no category is provided

        const newsResponse = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${GNEWS_API_KEY}`);
        const articles = newsResponse.data.articles;

        const sentimentResults = await Promise.all(articles.map(async (article) => {
            try {
                const sentimentResponse = await axios.post(PYTHON_API_URL, { text: article.title });
                return {
                    title: article.title,
                    description: article.description,
                    content: article.content,
                    image: article.image,
                    source: {
                        name: article.source.name,
                        url: article.source.url
                    },
                    sentiment: sentimentResponse.data.sentiment
                };
            } catch (err) {
                return {
                    title: article.title,
                    description: article.description,
                    sentiment: 'Error analyzing sentiment'
                };
            }
        }));

        res.json(sentimentResults);

    } catch (error) {
        console.error('Error fetching news:', error.message);
        console.error('Full error:', error.response?.data || error);
        res.status(500).json({ message: 'Error fetching news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// import express from 'express';
// import axios from 'axios';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import cron from 'node-cron';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5001;

// app.use(cors());
// app.use(express.json());

// const GNEWS_API_KEY = process.env.API_KEY;
// const PYTHON_API_URL = 'https://sentimental-analyser.onrender.com/sentiment';

// const categories = ['general', 'business', 'technology', 'sports', 'health']; // 5 categories
// let cachedNews = {}; // { general: [...], sports: [...], etc }

// // 🔁 Fetch news & sentiment once per hour
// const fetchNewsForCategory = async (category) => {
//     try {
//         const newsResponse = await axios.get(`https://gnews.io/api/v4/top-headlines`, {
//             params: {
//                 category,
//                 lang: 'en',
//                 country: 'us',
//                 max: 10,
//                 apikey: GNEWS_API_KEY
//             }
//         });

//         const articles = newsResponse.data.articles;

//         const sentimentResults = await Promise.all(articles.map(async (article) => {
//             try {
//                 const sentimentResponse = await axios.post(PYTHON_API_URL, { text: article.title });
//                 return {
//                     title: article.title,
//                     description: article.description,
//                     content: article.content,
//                     image: article.image,
//                     source: article.source,
//                     sentiment: sentimentResponse.data.sentiment
//                 };
//             } catch (err) {
//                 return {
//                     ...article,
//                     sentiment: 'Error analyzing sentiment'
//                 };
//             }
//         }));

//         cachedNews[category] = sentimentResults;

//     } catch (error) {
//         console.error(`❌ Error fetching ${category} news:`, error.message);
//     }
// };

// // 🔄 Schedule to run every hour
// cron.schedule('0 * * * *', async () => {
//     console.log('🔁 Fetching and updating news for all categories...');
//     for (const category of categories) {
//         await fetchNewsForCategory(category);
//     }
//     console.log('✅ All categories updated!');
// });

// // 🟢 API route to serve cached news
// app.get('/news', (req, res) => {
//     const category = req.query.category || 'general';
//     const data = cachedNews[category] || [];
//     res.json(data);
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
