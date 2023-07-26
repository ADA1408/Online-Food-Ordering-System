import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const StarRating = ({ rating, starColor }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - Math.ceil(rating);

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={i} style={{ color: starColor }} />);
  }
  if (hasHalfStar) {
    stars.push(<BsStarHalf key={fullStars} style={{ color: starColor }} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStar key={fullStars + i + 1} style={{ color: starColor }} />);
  }

  return <div>{stars}</div>;
};

export default StarRating;
