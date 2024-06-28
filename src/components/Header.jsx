import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setshowCategories] = useState(false);

  return (
    <nav>
      <div>
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

        {/* render categories */}
        <Link className="px-4 py-1 hover:gradient">Reactions</Link>
      </div>
    </nav>
  );
};

export default Header;
