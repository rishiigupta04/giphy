import React, { useEffect, useState } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const { gifFetcher, gifs, setGifs, filter } = GifState();
  const [loading, setLoading] = useState(true);

  const fetchTrendingGIFs = async () => {
    const { data } = await gifFetcher.trending({
      limit: 20,
      type: filter,
      rating: "g",

      random_id: Math.floor(Math.random() * 1000000),
    });
    setGifs(data);
  };

  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [filter]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="w-full mt-2 rounded"
      />

      {/* FilterGifs */}
      <FilterGif alignLeft showTrending />

      {!loading ? (
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
          {gifs.map((gif, i) => {
            return <Gif key={i} gif={gif} />;
          })}
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Home;
