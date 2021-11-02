import React from 'react';
import Game from './Game';
import { useState } from 'react';

export default function StarMatch() {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}
