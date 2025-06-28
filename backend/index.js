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
