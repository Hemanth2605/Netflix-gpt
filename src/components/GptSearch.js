import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGO } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={LOGO}
          alt="bg_image"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch;