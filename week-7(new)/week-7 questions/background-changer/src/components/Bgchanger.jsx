import React, { useState } from 'react';
import '../App.css';

export const Bgchanger = () => {
  const [bgColor, setBgColor] = useState('');
// here split method will split classname into array  find will find those which startwith bg
  const handleClick = (event) => {
    const newBgColor = event.target.className.split(' ').find((className) => className.startsWith('bg-'));
    setBgColor(newBgColor || '');
    
    // Remove previously added class
    if (bgColor) {
        document.body.classList.remove(bgColor);
      }
  
      // Add new class
      setBgColor(newBgColor || '');
      document.body.classList.add(newBgColor || '');
  };

  return (
    <div className="whole_page" >
      <div className="card gap-28">
        <button className='btn bg-red-600' onClick={handleClick}>Red</button>
        <button className='btn bg-yellow-600' onClick={handleClick}>Yellow</button>
        <button className='btn bg-neutral-950 text-white' onClick={handleClick}>Black</button>
        <button className='btn bg-violet-600' onClick={handleClick}>Purple</button>
        <button className='btn bg-green-600' onClick={handleClick}>Green</button>
        <button className='btn bg-blue-600' onClick={handleClick}>Blue</button>
        <button className='btn bg-pink-600' onClick={handleClick}>Default</button>
      </div>
    </div>
  );
};

  