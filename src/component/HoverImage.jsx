import React, { useState } from 'react';
import './App.css';

const HoverImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`image-container ${isHovered ? 'hover' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="https://via.placeholder.com/300"
        alt="Placeholder"
        style={{ width: '300px', height: '300px' }}
      />
      <div className="hover-text">Hovering over the image!</div>
    </div>
  );
};

export default HoverImage;
