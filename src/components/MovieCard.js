import React from 'react';
import {IMAGE_PATH} from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 pr-4">
      <img alt="Movie Card" src={IMAGE_PATH + posterPath} />
    </div>
  );
};
export default MovieCard;