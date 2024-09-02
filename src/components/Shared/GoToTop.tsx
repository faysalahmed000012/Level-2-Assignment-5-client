import { useEffect, useState } from "react";
import { Tooltip } from "react-daisyui";
import { FaArrowUp } from "react-icons/fa6";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="flex items-center justify-center relative">
      {isVisible && (
        <Tooltip
          className="fixed bottom-[123px] right-[99px] z-50"
          message="Scroll To Top"
        >
          <div
            data-tooltip-target="tooltip-default"
            className="bg-purple-500 w-10 h-10 shadow-md text-white rounded-full fixed bottom-20 right-20 z-50 flex items-center justify-center cursor-pointer"
            onClick={goToBtn}
          >
            <FaArrowUp className="top-btn--icon" />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default GoToTop;
