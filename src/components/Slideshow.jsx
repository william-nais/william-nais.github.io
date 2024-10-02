import React, { useState } from 'react';

// Slideshow component
const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If images array is not provided or is empty, return a fallback
  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      {/* Left arrow button */}
      <button className="arrow-button left" onClick={prevImage}>
        &#8249;
      </button>

      {/* Image display */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slideshow-image"
      />

      {/* Right arrow button */}
      <button className="arrow-button right" onClick={nextImage}>
        &#8250;
      </button>
    </div>
  );
};

export default Slideshow;