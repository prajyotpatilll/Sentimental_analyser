import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Category = () => {
  const {
    category,
    handleCategoryChange,
  } = useContext(AppContext);

  return (
    <div>
      <div className="flex md:gap-10 flex-wrap p-4 justify-center border-t-2  border-gray-300">
        {["general", "business", "technology", "sports", "health"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2  font-medium  ${
                category === cat
                  ? " text-black"
                  : " text-gray-600 hover:text-black"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Category;
