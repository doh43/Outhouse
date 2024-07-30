import React from 'react';

interface StarRatingProps {
  rating: number;
  outOf?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, outOf = 5 }) => {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>&#9733;</span>); // filled star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // empty star
    }
  }

  return <div className="text-yellow-500">{stars}</div>;
};

export default StarRating;
