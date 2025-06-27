import React, {  useContext } from "react";
import Card from "../componant/Card";
import { AppContext } from "../context/AppContext";
import Navbar from "../componant/Navbar";
import Category from "../componant/Category";
import Sentimet from "../componant/Sentimet";

const NewsMain = () => {
  const {
    loading,
    filteredArticles,
  } = useContext(AppContext);

  return (
    <div className="min-h-screen  p-6">
      <Navbar />
      <Category />
      <Sentimet />

      {loading ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-4 text-xl font-medium text-gray-700 animate-pulse">
            📰 Loading the latest headlines,It may takes time...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <Card key={index} article={article} />
            ))
          ) : (
            <p className="text-center w-full text-lg text-gray-600">
              No articles found for this sentiment.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsMain;
