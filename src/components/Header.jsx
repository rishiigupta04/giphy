import React, { useState } from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setshowCategories] = useState(false);

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
          <Link className="px-4 py-1 rounded-lg hover:gradient border-b-4 hidden lg:block">
            Reactions
          </Link>
          <button>
            <HiEllipsisVertical
              onClick={() => setshowCategories(!showCategories)}
              size={40}
              className={` py-2 rounded-lg hover:gradient 
                ${showCategories ? "gradient" : ""}
                border-b-4 hidden lg:block`}
            />
          </button>

          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded hover:gradient">
            <Link to={"/favorites"}>Favorite GIFs</Link>
          </div>
          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={25}
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-12 w-full gradient z-20">
            <span>Categories</span>
            <hr />
            <div>
              <Link className="font-bold">Reactions</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
