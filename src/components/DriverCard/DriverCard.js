import React from 'react';

import './DriverCard.css';

const DriverCard = (props) => {
  let num = Math.round(props.rating);
  let emptyStar = '☆';
  let fullStar = '★';
  let stars = fullStar.repeat(num) + emptyStar.repeat(5 - num);
  return (
    <div className="DriverCard">
      <p>{props.name}</p>
      <p>{stars}</p>
      <img src={props.img} style={{ width: '100px' }} alt="img"></img>
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
};
export { DriverCard };
