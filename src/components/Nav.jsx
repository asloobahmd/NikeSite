import { Menu } from "lucide-react";
import { headerLogo } from "../assets/images";
import { navLinks, services } from "../constants";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    clicked
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [clicked]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setView(true);
      } else {
        setView(false);
      }

      return () => {
        setView(false);
      };
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`w-full z-10  relative ${
        view ? "sticky top-0 z-50 bg-white shadow-sm" : ""
      }`}
    >
      <div className="container p-3 py-5 max-md:py-4 flex justify-between items-center">
        <div className="  max-md:w-[120px]">
          <img src={headerLogo} alt="" />
        </div>

        <ul className={`hidden md:flex items-center gap-x-10`}>
          {navLinks.map((link, i) => (
            <Link
              key={i}
              className="py-1 px-3 cursor-pointer"
              to={link.link}
              offset={-70}
              smooth={true}
              onClick={() => setClicked(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setClicked(true)}>
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

        <MobileNav clicked={clicked} setClicked={setClicked} />
      </div>
    </header>
  );
};

export default Nav;
