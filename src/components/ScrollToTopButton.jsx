import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200); // shows button after 200px scroll
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce"
      title="Back to top"
    >
      <FaArrowUp className="text-lg" />
    </button>
  ) : null;
};

export default ScrollToTopButton;
