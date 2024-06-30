import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favorites, setFavorites] = useState([]);

  const addtoFavorites = (id) => {
    if (favorites.includes(id)) {
      const updatedFavorites = favorites.filter((itemId) => itemId !== id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites];
      updatedFavorites.push(id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
    setFavorites(storedFavorites);
  }, []);

  const gifFetcher = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

  return (
    <GifContext.Provider
      value={{
        gifFetcher,
        gifs,
        setGifs,
        filter,
        setFilter,
        favorites,
        addtoFavorites,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};

export const GifState = () => {
  return useContext(GifContext);
};

export default GifProvider;
