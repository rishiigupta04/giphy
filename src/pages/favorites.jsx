import { useEffect, useState } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/Gif";

const Favorites = () => {
  const { gifFetcher, favorites } = GifState();
  const [favoriteGIFs, setFavoriteGIFs] = useState([]);

  const fetchFavoriteGIFs = async () => {
    const { data: gifs } = await gifFetcher.gifs(favorites);
    setFavoriteGIFs(gifs);
  };

  useEffect(() => {
    fetchFavoriteGIFs();
  }, []);

  return (
    <div className="mt-2">
      <span className="faded-text ">My Favorites</span>
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-2 mt-2">
        {favoriteGIFs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
