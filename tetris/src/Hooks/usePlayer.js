import {useState} from 'react';
import {randomTetromino} from '../StagePieces/tetrominos';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: {x: 0, y:0}
    tetrominos: randomTetromino().shape,
    collided: false
  });
}