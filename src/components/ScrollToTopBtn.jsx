import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
const ScrollToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }

      return () => {
        setShowBtn(false);
      };
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <button
      onClick={() => {
        scroll.scrollToTop();
      }}
      className={`${
        showBtn ? "" : "hidden"
      } fixed bottom-10 text-white right-4 p-2 rounded-full bg-indigo-950`}
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
        className="lucide lucide-chevron-up"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
};

export default ScrollToTopBtn;
