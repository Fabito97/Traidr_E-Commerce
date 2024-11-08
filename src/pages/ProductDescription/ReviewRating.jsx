import React from 'react'
import { FaStar } from 'react-icons/fa6'

const ReviewRating = ({rating}) => {
  return (
    <div>
    {Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`cursor-pointer ${
          rating >= index + 1 
            ? 'text-primary'
            : 'faint'
        }`}
        
      />
    ))}
  </div>
  )
}

export default ReviewRating