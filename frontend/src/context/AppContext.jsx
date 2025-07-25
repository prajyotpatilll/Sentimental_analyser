import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvide = (props) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);
  const [sentimentFilter, setSentimentFilter] = useState("All");

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${backendURL}/news?category=${category}`
      );

      setArticles(response.data);

      console.log(articles)
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSentimentChange = (newSentiment) => {
    setSentimentFilter(newSentiment);
  };

  const filteredArticles = articles.filter((article) => {
    if (sentimentFilter === "All") return true;
    return article.sentiment === sentimentFilter;
  });

  useEffect(() => {
    fetchNews();
  }, [category]);

  const value = {
    articles,
    setArticles,
    category,
    setCategory,
    loading,
    setLoading,
    sentimentFilter,
    setSentimentFilter,
    handleCategoryChange,
    handleSentimentChange,
    filteredArticles,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvide;
