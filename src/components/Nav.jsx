import { Menu } from "lucide-react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <header className="absolute w-full z-10">
      <div className="container p-3 py-5 flex justify-between items-center">
        <div>
          <img src={headerLogo} alt="" />
        </div>

        <button className="md:hidden" onClick={() => setClicked(!clicked)}>
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
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-x-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
