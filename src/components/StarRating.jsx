import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(1);
  const [hoveredRating, setHoveredRating] = useState(0);
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={`cursor-pointer ${
            rating >= index + 1 || hoveredRating >= index + 1
              ? 'text-primary'
              : 'faint'
          }`}
          onClick={() => setRating(index + 1)}
          onMouseOver={() => setHoveredRating(index + 1)}
          onMouseOut={() => setHoveredRating(0)}
        />
      ))}
    </div>
  );
};

export default StarRating;
