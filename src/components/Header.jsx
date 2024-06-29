import React, { useEffect, useState } from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GifState } from "../context/gif-context";
import GifSearch from "./GifSearch";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setshowCategories] = useState(false);

  const { gifFetcher, favorites } = GifState();

  const fetchGifCategories = async () => {
    const { data } = await gifFetcher.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            width={40}
            alt="giphy logo"
            className="cursor-pointer"
          />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div className="font-bold text-md flex gap-4 items-center">
          {/* render categories */}
          {categories?.slice(0, 5)?.map((category, i) => {
            return (
              <Link
                to={`/${category.name_encoded}`}
                key={i}
                className="px-4 py-1 rounded-lg hover:gradient border-b-4 hidden lg:block"
              >
                {category.name}
              </Link>
            );
          })}

          <button>
            <HiEllipsisVertical
              onClick={() => setshowCategories(!showCategories)}
              size={40}
              className={` py-2 rounded-lg hover:gradient 
                ${showCategories ? "gradient" : ""}
                border-b-4 hidden lg:block`}
            />
          </button>

          {favorites.length > 0 && (
            <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded hover:gradient">
              <Link to={"/favorites"}>Favorite GIFs</Link>
            </div>
          )}
          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={25}
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-6 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
              {categories?.map((category, i) => {
                return (
                  <Link
                    to={`/${category.name_encoded}`}
                    key={i}
                    className="font-bold hover:gradient px-2 py-1 rounded-lg"
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* search */}
      <GifSearch />
    </nav>
  );
};

export default Header;
