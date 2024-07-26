"use client";

import { continents, setFilterCounter } from "@/utils";
import { useEffect, useRef, useState } from "react";

const Select = () => {
  const selecetItem: any = useRef(null);
  const [filter, setFilter] = useState();

  useEffect(() => {
    setFilterCounter();
  }, [filter]);

  const handleChange = (event: any) => {
    const filterValue = event.target.value;
    setFilter(event.target.value);
    selecetItem.current.setAttribute("data-filter", filterValue);
    const cards: any = document.querySelectorAll(".js-card");
    [...cards].map((card: any) => {
      if (!filterValue || filterValue === "all") {
        card.classList.remove("hidden");
        return;
      }
      const continent = card.dataset.continent.toLowerCase();
      if (continent === filterValue) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  };

  return (
    <div
      ref={selecetItem}
      className="dark:bg-gray-900 shadow-sm text-black dark:text-white bg-white w-full relative h-12 rounded-md"
      id="selectedFilter"
    >
      <select
        onChange={handleChange}
        className="w-full h-full bg-transparent outline-none px-3"
      >
        <option defaultValue=" " disabled selected>
          Filter By Region
        </option>
        {continents.map((item) => (
          <option key={item} value={item.toLocaleLowerCase()}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
