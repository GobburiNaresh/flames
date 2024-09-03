import React from 'react';
import './ImageResult.css'; 
import Friends from '../images/friends.jpg';
import Love from '../images/love.jpg';
import Affection from '../images/affection.jpg';
import Marriage from '../images/marriage.jpg';
import Enemies from '../images/enemies.jpg';
import Siblings from '../images/siblings.jpg';

const ImageResult = ({ result }) => {
  const images = {
    Friends: Friends,
    Love: Love,
    Affection: Affection,
    Marriage: Marriage,
    Enemies: Enemies,
    Siblings: Siblings,
  };
  const imageSrc = images[result];

  return (
    <div className="image-result-container">
      {result && (
        <>
          <h3>{result}</h3>
          <img src={imageSrc} alt={result} />
        </>
      )}
    </div>
  );
};

export default ImageResult;
