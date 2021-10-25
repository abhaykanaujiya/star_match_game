import React from 'react';

export default function PlayNumber(props) {
  const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};
  return (
    <div>
      <button
        className='number' style={{backgroundColor:colors[props.status]}}
        onClick={() =>props.onNumberClick(props.number,props.status)}
      >
        {props.number}
      </button>
    </div>
  );
}
