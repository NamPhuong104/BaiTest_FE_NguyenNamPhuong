import React, { useState, useEffect } from "react";
import styles from "./Imageslider.module.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.slider}>
      <button
        className={`${styles.button} ${styles.prev}`}
        onClick={goToPreviousSlide}
      >
        &lt;
      </button>
      <img
        className={styles.slideImage}
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex}`}
      />
      <button
        className={`${styles.button} ${styles.next}`}
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
