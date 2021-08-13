// Dependencies
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <header className="bg-green-400 flex justify-between px-8 py-2 items-center">
        <h1 className="text-xl font-bold">Flashcards application</h1>
        <nav>
          <ul className="flex">
            <li
              className={`mr-3 font-medium hover:text-yellow-400 ${
                pathname === "/" ? "text-yellow-400" : "text-black"
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`font-medium ${
                pathname === "/decks" ? "text-yellow-400" : "text-black"
              }`}
            >
              <Link to={"/decks"}>Deck</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
