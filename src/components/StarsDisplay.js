import React from 'react';
import './star.css';
export default function StarsDisplay(props) {
  return (
     <>
    {props.utils.range(1, props.count).map(starId => (
      <div key={starId} className="star" />
    ))}
  </>
);
}
