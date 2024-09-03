import React, { useState } from 'react';
import './flames.css';
import Header from '../Header/header';
import ImageResult from '../ImageResult/ImageResult';

const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateFlames = () => {
    if (!name1 || !name2) {
      alert('Please enter both names!');
      return;
    }

    let cleanedName1 = name1.toLowerCase().replace(/[^a-z]/g, '');
    let cleanedName2 = name2.toLowerCase().replace(/[^a-z]/g, '');

    // Step 2: Remove common letters
    for (let i = 0; i < cleanedName1.length; i++) {
      const char = cleanedName1[i];
      if (cleanedName2.includes(char)) {
        cleanedName1 = cleanedName1.replace(char, '');
        cleanedName2 = cleanedName2.replace(char, '');
        i--; 
      }
    }

    const remainingCount = cleanedName1.length + cleanedName2.length;

    // FLAMES logic
    const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    let index = 0;

    while (flames.length > 1) {
      index = (index + remainingCount - 1) % flames.length;
      flames.splice(index, 1); 
    }

    const flamesResult = flames[0];
    let relationship = '';

    switch (flamesResult) {
      case 'F':
        relationship = 'Friends';
        break;
      case 'L':
        relationship = 'Love';
        break;
      case 'A':
        relationship = 'Affection';
        break;
      case 'M':
        relationship = 'Marriage';
        break;
      case 'E':
        relationship = 'Enemies';
        break;
      case 'S':
        relationship = 'Siblings';
        break;
      default:
        relationship = '';
    }

    setResult(relationship);
  };

  return (
    <>
      <Header/>
      <div className="container">
        <input
          type="text"
          placeholder="Enter first name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter second name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          required
        />
        <button onClick={calculateFlames}>Calculate FLAMES</button>
      </div>

      <ImageResult result={result}/>
    </>
  );
};

export default FlamesGame;
