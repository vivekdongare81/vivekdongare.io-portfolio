import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";
import SocialLinks from "./SocialLinks";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between w-full">
      {/* Left: Logo */}
      <div className="flex-1 flex items-center">
        <li className="list-none font-bold text-lg cursor-pointer">
          <Link href="/">
            <span className="font-black text-xl flex items-center">
              <img
                className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
                src="/static/logos/logo_no_text.svg"
                width="60"
              />
              {"Vivek Dongare".split("").map((letter, index) => {
                if (letter === " ") {
                  return <span key={index} style={{ width: "0.3em", display: "inline-block" }}>&nbsp;</span>;
                }
                return (
                  <span key={index} className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                    {letter}
                  </span>
                );
              })}
            </span>
          </Link>
        </li>
      </div>
      {/* Center: Navigation Links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex items-center space-x-10">
          {routes.map((item, index) => (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Right: Social Links */}
      <div className="flex-1 flex justify-end">
        <SocialLinks />
      </div>
    </nav>
  );
}

export default Navbar;
