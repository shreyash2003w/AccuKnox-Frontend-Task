import React, { useState } from "react";
import ColorPalette from "../Components/ColorCards/ColorPalette";
import colors from "../utils/colors.json";
import SearchBar from "../Components/ColorCards/SearchBar";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredColors = colors.filter((color) =>
    color.name.toLowerCase().includes(searchQuery.trim().toLowerCase())  ||
    color.hex.toLowerCase().includes(searchQuery.trim().toLowerCase())

  );

  return (
    <div>
      <div className="mt-40">
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center text-primary">
        Color Palette
      </h1>
      <ColorPalette colors={filteredColors} />
    </div>
  );
};

export default SearchPage;
