import React from 'react';
import './Rating.css';

const Rating = ({ children }) => {
  return (
    <div className="Rating">
      {'★'.repeat(Math.round(Number(children)))}
      {'☆'.repeat(5 - Math.round(Number(children)))}
    </div>
  );
};

export { Rating };
