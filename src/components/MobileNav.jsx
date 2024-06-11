import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-scroll";

const MobileNav = ({ clicked, setClicked }) => {
  return (
    <div
      className={`md:hidden bg-zinc-900/20 absolute top-0 h-screen w-full transition-all duration-200
        ${clicked ? "left-0" : "left-[-160%]"}
        `}
    >
      <div className="p-10 bg-gray-900 text-white h-screen w-full overflow-auto relative">
        <p className="text-4xl  font-semibold">Nike</p>
        <button
          className="absolute top-4 right-3.5 text-3xl"
          onClick={() => setClicked(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="mt-10 flex flex-col gap-y-6 text-lg">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              className="py-1 px-3 cursor-pointer hover:bg-gray-800"
              offset={-80}
              to={link.link}
              smooth={true}
              onClick={() => setClicked(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
