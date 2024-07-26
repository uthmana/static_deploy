"use client";

import { useEffect, useRef } from "react";
import "./switch.css";
import Moon from "../Icons/Moon";
import Sun from "../Icons/Sun";

export default function Switch() {
  const switchCheckbox: any = useRef(null);
  useEffect(() => {
    const colorTheme = localStorage.getItem("color-theme");
    if (colorTheme && colorTheme === "light") {
      switchCheckbox.current.checked = false;
    } else {
      switchCheckbox.current.checked = true;
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleSwitch = (e: any) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("color-theme", "light");
    }
  };

  return (
    <div className="switch">
      <input
        type="checkbox"
        onChange={handleSwitch}
        className="sr-only"
        id="checkbox"
        ref={switchCheckbox}
      />
      <label htmlFor="checkbox" className="switch-label">
        <span className=" switch-mode flex items-center">
          <Moon />
        </span>
        <span className="switch-mode flex items-center justify-end">
          <Sun />
        </span>
        <span className="switch-ball"></span>
      </label>
    </div>
  );
}
