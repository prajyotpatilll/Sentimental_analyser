import React, { useState } from "react";

const Card = ({ article }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-[400px] mx-auto p-2 perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow flex flex-col">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-lg font-bold mb-2 line-clamp-3">
                {article.title}
              </h2>
              <p className="text-gray-700 mb-2 text-sm line-clamp-3">
                {article.description}
              </p>
            </div>

            {/* Source and Sentiment on Front Side */}
            <div className="flex justify-between items-center mt-4">
              <a
                href={article.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
                onClick={(e) => e.stopPropagation()} // Prevent card flip on link click
              >
                {article.source.name}
              </a>

              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  article.sentiment === "Positive"
                    ? "bg-green-200 text-green-800"
                    : article.sentiment === "Negative"
                    ? "bg-red-200 text-red-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {article.sentiment}
              </span>
            </div>
          </div>
        </div>

        {/* Back Side: Show Only Content + Source and Sentiment */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg overflow-hidden transform rotate-y-180 p-4 flex flex-col justify-between text-base font-bold text-gray-700 ">
          <div className="overflow-auto mb-4">
            {article.content
              ? article.content.split("[")[0].trim()
              : "Content not available."}
          </div>

          {/* Source and Sentiment on Back Side */}
          <div className="flex justify-between items-center mt-4">
            <a
              href={article.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
              onClick={(e) => e.stopPropagation()} // Prevent card flip on link click
            >
              {article.source.name}
            </a>

            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${
                article.sentiment === "Positive"
                  ? "bg-green-200 text-green-800"
                  : article.sentiment === "Negative"
                  ? "bg-red-200 text-red-800"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {article.sentiment}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
