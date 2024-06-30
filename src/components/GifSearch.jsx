// Importing necessary dependencies
import React, { useState } from "react"; // React and useState hook
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2"; // Icons
import { useNavigate } from "react-router-dom"; // Navigate hook

// Functional component for GifSearch
const GifSearch = () => {
  // State hook for query
  const [query, setQuery] = useState("");
  // Navigate hook for navigating to search results page
  const navigate = useNavigate();

  // Function for searching GIFs
  const searchGIFs = async () => {
    // If query is empty, return
    if (query.trim() === "") {
      return;
    }
    // Navigate to search results page
    navigate(`/search/${query}`);
  };

  // Rendering the component
  return (
    // Outer div for the search bar
    <div className="flex relative gap-2 items-center">
      {/* Input field for query */}
      <input
        type="text"
        value={query} // Value of the input field is query state
        onChange={(e) => setQuery(e.target.value)} // On change event, update query state
        onKeyDown={(e) => e.key === "Enter" && searchGIFs(query)} // On enter key press, search GIFs
        className="w-full pl-4 pr-14 py-5 text-sm sm:text-xl text-black rounded-tl rounded-bl border-gray-300 outline-none " // CSS classes for styling
        placeholder="Search all the GIFs and Stickers" // Placeholder text for input field
      />

      {/* If query is not empty, render a button to clear the query */}
      {query && (
        <button
          onClick={() => setQuery("")} // On click event, clear query state
          className="absolute bg-gray-500 opacity-90 rounded-full right-20 mr-2 top-6"
        >
          <HiMiniXMark size={25} /> {/* X mark icon */}
        </button>
      )}

      {/* Button for searching GIFs */}
      <button
        onClick={searchGIFs} // On click event, search GIFs
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-3 sm:py-4 rounded-tr rounded-br"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />{" "}
        {/* Magnifying glass icon */}
      </button>
    </div>
  );
};

export default GifSearch;
