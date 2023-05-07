import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import {
  faSmile,
  faHeadset,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "0",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  position: "absolute",
  background: "#7ED56F",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textShadow: "1px 1px 1px black",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    textAlign: "center",
    lineHeight: 1.2,
    padding: "20px",
    boxSizing: "border-box",
    backgroundPosition: "center",
    backgroundSize: "cover",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    verticalAlign: "middle",
    border: "solid 0px white",
    boxSizing: "border-box",
    borderRadius: "10px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    backgroundPosition: "center center",
  });
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    marginBottom: "20px",
                    color: "#55c57a",
                    fontSize: "1.6rem",
                    alignItems: "center",
                    justifyContent: "center ",
                  }}
                >
                  {/* <FontAwesomeIcon icon={faHeadset} size="2x" style={{ marginRight: "4rem" }} />
    <FontAwesomeIcon icon={faStar} size="2x" style={{ marginRight: "4rem" }} />
    <FontAwesomeIcon icon={faTruck} size="2x" style={{ marginRight: "4rem" }} />
    <FontAwesomeIcon icon={faSmile} size="2x" style={{ marginRight: "4rem" }} /> */}
                </div>

                <p
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "30px",
                    margin: "20px 0",
                    color: "#fff",
                    textShadow: "1px 1px 1px black",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    fontSize: "1.6rem",
                    lineHeight: "30px",
                    margin: "20px 0",
                    textAlign:'center',
                    color: "#fff",
                  }}
                >
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
