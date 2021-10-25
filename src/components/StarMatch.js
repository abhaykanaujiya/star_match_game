import React from 'react';
import { useState } from 'react';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';

export default function StarMatch() {
  const utils = {
    // Sum an array
    sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

    // create an array of numbers between min and max (edges included)
    range: (min, max) =>
      Array.from({ length: max - min + 1 }, (_, i) => min + i),

    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[utils.random(0, sums.length - 1)];
    },
  };

  const [stars, setstars] = useState(utils.random(1, 9));
  const [availableNums, setAvsilsbleNums] = useState(utils.range(1, 9));
  const [candidateNum, setCandidateNum] = useState([]);
  const candidatesAreWrong = utils.sum(candidateNum) > stars;

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNum.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus == 'used') {
      return;
    }
    const newCandidatNums = candidateNum.concat(number);
    if (utils.Sum(newCandidatNums) !== stars) {
      setCandidateNum(newCandidatNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidatNums.includes(n)
      );
      setstars(utils.randomSumIn(newAvailableNums, 9));
      setAvsilsbleNums(newAvailableNums);
      setCandidateNum([]);
    }
  };
  return (
    <div className='game'>
      <div className='help'>
        pick one number that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          <StarsDisplay count={stars} utils={utils} />

          {utils.range(1, stars).map((starId) => (
            <div key={starId} className='star' />
          ))}
        </div>
        <div className='right'>
          {utils.range(1, 9).map((number) => (
            <PlayNumber
              key={number}
              status={numberStatus(number)}
              number={number}
            />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining:10</div>
    </div>
  );
}
