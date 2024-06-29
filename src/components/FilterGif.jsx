// Importing the necessary dependencies
import React from "react";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { GifState } from "../context/gif-context";

// Defining an array of objects representing the filters
const filters = [
  {
    // Title of the filter
    title: "GIFs",
    // Value of the filter
    value: "gifs",
    // CSS class for the background of the filter
    background:
      "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500",
  },
  {
    title: "Stickers",
    value: "stickers",
    background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
  },
  {
    title: "Text",
    value: "text",
    background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500",
  },
];

// Defining the FilterGif component
const FilterGif = ({ alignLeft = false, showTrending = false }) => {
  // Getting the filter and setFilter variables from the GifState context
  const { filter, setFilter } = GifState();

  // Rendering the component
  return (
    // Outer div for the filter component
    <div
      className={`flex my-3 gap-3 ${alignLeft ? "" : "justify-end"} ${
        showTrending
          ? "flex-col sm:flex-row sm:items-center justify-between"
          : ""
      }`}
    >
      {/* Rendering the trending label if showTrending is true */}
      {showTrending && (
        <div className="flex gap-2">
          {/* Trending icon */}
          {showTrending && (
            <HiMiniArrowTrendingUp size={25} className="text-teal-400" />
          )}
          {/* Trending label */}
          <span className="font-semibold text-gray-400">Trending</span>
        </div>
      )}

      {/* Outer div for the filters */}
      <div className="flex min-w-80 rounded-full bg-gray-800">
        {/* Mapping over the filters array */}
        {filters.map((filterItem, index) => (
          // Filter item div
          <span
            key={index}
            // On click event to set the filter variable in the GifState context
            onClick={() => setFilter(filterItem.value)}
            // CSS classes for the filter item
            className={`font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer ${
              filter === filterItem.value ? filterItem.background : ""
            }`}
          >
            {/* Filter item title */}
            {filterItem.title}
          </span>
        ))}
      </div>
    </div>
  );
};

// Exporting the FilterGif component
export default FilterGif;
