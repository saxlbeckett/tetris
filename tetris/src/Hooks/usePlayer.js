import {useState, useCallback} from 'react';
import { STAGE_WIDTH } from '../StagePieces/gameHelper';
import {randomTetromino} from '../StagePieces/tetrominos';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: {x: 0, y:0},
    tetrominos: randomTetromino().shape,
    collided: false
  });

  const updatePlayerPos = ({x, y, collided}) => {
    //set state
    setPlayer(prev => ({
      ...prev,
      pos: {x:(prev.pos.x +=x), y:(prev.pos.y +=y)},
      collided,
    }))
  }
//need to use call back here to prevent infinite loop 
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: {x: STAGE_WIDTH/2-2,y: 0},
      tetrominos: randomTetromino().shape,
      collided: false
    })
  })

  return [player];
}