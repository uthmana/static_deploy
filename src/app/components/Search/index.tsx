"use client";

import { setFilterCounter } from "@/utils";
import { useEffect, useState } from "react";
import SearchIcon from "../Icons/Search";

const Search = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilterCounter();
  }, [search]);

  const handleSearch = () => {
    const cards: any = document.querySelectorAll(".js-card");
    const selectedFilter: any = document.getElementById("selectedFilter");
    const continentFilter = selectedFilter.dataset?.filter;

    [...cards].map((card: any) => {
      if (!search) {
        card.classList.remove("hidden");
      }
      const name = card.dataset.name.toLowerCase();
      const continent = card.dataset.continent.toLowerCase();

      if (continentFilter && continentFilter != "all") {
        if (continentFilter === continent && name.includes(search)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
          return;
        }
      } else {
        if (name.includes(search)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      }
    });
  };

  return (
    <div className="bg-white shadow-sm text-black dark:text-white dark:bg-gray-900 w-full relative pl-10 h-12 rounded-md">
      <SearchIcon />
      <input
        type="text"
        value={search}
        onKeyUp={handleSearch}
        onChange={(e) => setSearch(e.target.value?.toLocaleLowerCase())}
        placeholder="Search countries..."
        className="!bg-transparent h-full w-full outline-none"
      />
    </div>
  );
};

export default Search;
