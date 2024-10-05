import React from 'react';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="d-flex justify-content-center align-items-center">
        {[...Array(fullStars)].map((_, index) => (
            <i key={`full-${index}`} className="fa fa-star text-warning"></i>
        ))}
        {halfStar && <i className="fa fa-star-half-o text-warning"></i>}
        {[...Array(emptyStars)].map((_, index) => (
            <i key={`empty-${index}`} className="fa fa-star-o text-warning"></i>
        ))}
    </div>
  );
}

export default StarRating;