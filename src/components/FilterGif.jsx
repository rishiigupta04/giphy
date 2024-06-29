import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { GifState } from "../context/gif-context";

const filters = [
  {
    title: "GIFs",
    value: "gifs",
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

const FilterGif = ({ alignLeft = false, showTrending = false }) => {
  // Extract filter and setFilter from GifState context
  const { filter, setFilter } = GifState();

  // Render the FilterGif component
  return (
    // Create a div to hold the filter options
    <div
      // Set the class name for the div based on the values of alignLeft and showTrending
      className={`flex my-3 gap-3 ${alignLeft ? "" : "justify-end"} ${
        showTrending
          ? "flex-col sm:flex-row sm:items-center justify-between "
          : ""
      }`}
    >
      {/* If showTrending is true, render a div with an arrow icon and the text "Trending" */}
      {showTrending && (
        <div className="flex gap-2">
          {showTrending && (
            <HiMiniArrowTrendingUp size={25} className="text-teal-400" />
          )}

          <span className="font-semibold text-gray-400">Trending</span>
        </div>
      )}

      {/* Render a div with a class of "flex min-w-80 rounded-full bg-gray-800" */}
      {/* Map over the filters array and render a span for each filter in the array */}

      <div className="flex min-w-80 rounded-full bg-gray-800">
        {filters.map((f, i) => {
          return (
            <span
              // Add an onClick event listener to set the filter value to the value of the current filter when clicked
              onClick={() => setFilter(f.value)}
              // Set the class name for the span based on the value of the filter and the current filter value
              className={`${
                filter === f.value ? f.background : ""
              } font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer `}
              // Set the key for the span to the index of the current filter in the array
              key={i}
            >
              {/* Render the title of the current filter */}
              {f.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default FilterGif;
