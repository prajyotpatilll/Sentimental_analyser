import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Sentimet = () => {
  const { sentimentFilter, handleSentimentChange } = useContext(AppContext);

  return (
    <div>
      <div className="flex md:gap-4 gap-1 mb-5 flex-wrap justify-center">
        {["All", "Positive", "Neutral", "Negative"].map((sentiment) => {
          const isActive = sentimentFilter === sentiment;
          const bgColor = isActive
            ? sentiment === "Positive"
              ? "bg-green-600 text-white"
              : sentiment === "Negative"
              ? "bg-red-600 text-white"
              : sentiment === "Neutral"
              ? "bg-gray-300 text-gray-900"
              : "bg-blue-600 text-white" // For "All"
            : sentiment === "Positive"
            ? "bg-white text-gray-700 hover:bg-green-100"
            : sentiment === "Negative"
            ? "bg-white text-gray-700 hover:bg-red-100"
            : sentiment === "Neutral"
            ? "bg-white text-gray-700 hover:bg-gray-200"
            : "bg-white text-gray-700 hover:bg-blue-100"; // For "All"

          return (
            <button
              key={sentiment}
              onClick={() => handleSentimentChange(sentiment)}
              className={`px-4 py-2 rounded-full font-medium shadow transition transform ${bgColor}`}
            >
              {sentiment}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sentimet;
