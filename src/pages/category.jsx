import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import Gif from "../components/Gif";
import FollowOn from "../components/FollowOn";

const Category = () => {
  const [results, setResults] = useState([]);
  const { category } = useParams();
  const { gifFetcher, filter } = GifState();

  const fetchResults = async () => {
    const { data } = await gifFetcher.gifs(category, category);
    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, [category]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {results.length > 0 && <Gif gif={results[0]} hover={false} />}
        <span className="text-gray-400 text-sm sm:text-lg pt-2 tracking-tight">
          Don&apos;t tell it to me, GIF it to me!
        </span>

        <FollowOn />

        <div className="divider" />
      </div>

      <div>
        <h2 className="text-4xl pb-1 capitalize font-extrabold ">
          {category.split("-").join(" & ")} GIFs
        </h2>
        <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
          @{category}
        </h2>

        {results.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
            {results.slice(1).map((gif) => (
              <Gif key={gif.id} gif={gif} />
            ))}
          </div>
        ) : (
          <p className="text-center faded-text">No GIFs found</p>
        )}
      </div>
    </div>
  );
};

export default Category;
