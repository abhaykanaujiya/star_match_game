import React from 'react';
export default function StarsDisplay(props) {
  return (
    <>
      {props.utils.range(1, props.count).map((starId) => (
        <div key={starId} className='star' />
      ))}
    </>
  );
}
