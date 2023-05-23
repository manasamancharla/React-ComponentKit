import React, { useState, useRef, useEffect, useCallback } from "react";

import "./Slider.css";

function Slider({ slides }) {
  // Create a ref to store the timer
  const timerRef = useRef(null);

  // Set the initial state for the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  // Function to go to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Define the width of each slide
  const slideWidth = "400px";

  // Function to enable sliding effect
  const getSlideStyles = (slideIndex) => ({
    width: slideWidth,
  });

  // Function to enable sliding effect
  const getSlidesContainerWidth = () => ({
    width: `${parseInt(slideWidth) * slides.length}px`,
    transform: `translateX(${-currentIndex * parseInt(slideWidth)}px)`,
  });

  // Set up an effect to automatically switch to the next slide after a timeout
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 3000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div className="slider_container">
      <div className="slides_wrapper_overflow">
        <div className="slides_wrapper" style={getSlidesContainerWidth()}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="slide"
              style={getSlideStyles(slideIndex)}
            >
              <img src={slide.avatar} />
              <p className="name">{slide.name}</p>
              <p className="review">{slide.review}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="test">
        <div className="left_arrow" onClick={goToPrevious}>
          ❰
        </div>

        <div className="dots_container">
          {slides.map((slide, slideIndex) => (
            <div
              className={`dot ${
                slideIndex === currentIndex ? "activedot" : ""
              }`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
        <div className="right_arrow" onClick={goToNext}>
          ❱
        </div>
      </div>
    </div>
  );
}

export default Slider;
