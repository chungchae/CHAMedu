import React, { useState } from 'react';
import StarRatings from "react-star-ratings";
import { PRIMARY } from '../../colors';

const MentorRating = () => {
  const [rating, setRating] = useState(5); 

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  return (
    <StarRatings
      rating={rating}
      starDimension={30}
      starRatedColor={PRIMARY.LIGHT}
      starHoverColor={PRIMARY.LIGHT}
      changeRating={changeRating}
      numberOfStars={5}
      name='rating'
    />
  );
};

export default MentorRating;
