import React, { useState } from "react";
import "./ScrollToTop.css";
import { Icon } from "@iconify/react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add an event listener to handle scroll position
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top-button ${isVisible ? "active" : ""}`}>
      <button onClick={scrollToTop}>
        <Icon
          icon="iconamoon:arrow-up-6-circle-fill"
          color="#4384e6"
          width="50"
          height="50"
          hFlip={true}
        />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
