import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import FilterGif from "../components/FilterGif";
import Gif from "../components/Gif";

const SearchPage = () => {
  const { gifFetcher, filter } = GifState();
  const [searchResults, setSearchResults] = useState([]);

  const { query } = useParams();

  const fetchSearchResults = async () => {
    const { data } = await gifFetcher.search(query, {
      sort: "relevant",
      limit: 20,
      type: filter,
      rating: "g",
      lang: "en",
    });
    setSearchResults(data);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [filter]);
  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
      <FilterGif alignLeft={true} />

      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
          {searchResults.map((gif) => (
            <Gif key={gif.id} gif={gif} />
          ))}
        </div>
      ) : (
        <span>{`No GIF results found for "${query}"`}</span>
      )}
    </div>
  );
};

export default SearchPage;
