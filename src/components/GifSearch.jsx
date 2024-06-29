import React, { useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const GifSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchGIFs = async () => {
    if (query.trim() === "") {
      return;
    }

    navigate(`/search/${query}`);
  };

  return (
    <div className="flex relative gap-2 items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && searchGIFs(query)}
        className="w-full pl-4 pr-14 py-5 text-xl text-black rounded-tl rounded-bl border-gray-300 outline-none "
        placeholder="Search all the GIFs and Stickers"
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute bg-gray-500 opacity-90 rounded-full right-20 mr-2 top-6"
        >
          <HiMiniXMark size={25} />
        </button>
      )}

      <button
        onClick={searchGIFs}
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-4 rounded-tr rounded-br"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
