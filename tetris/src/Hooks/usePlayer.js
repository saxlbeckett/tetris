import {useState, useCallback} from 'react';
import { STAGE_WIDTH } from '../StagePieces/gameHelper';
import {TETROMINOS, randomTetromino} from '../StagePieces/tetrominos';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: {x: 0, y:0},
    tetrominos: TETROMINOS[0].shape,
    collided: false
  });
                  //tetrominos
  const rotate = (matrix, dir) => {
    //make rows => columns
    const rotateTetro = matrix.map((_, index) => 
      matrix.map(col => col[index]),
      )
    //reverse reach row to get the rotation in array
      //bigger than zero
      if(dir > 0) return rotateTetro.map(row => row.reverse());
      return rotateTetro.reverse

    }

  const playerRotate = (stage, dir) => {

    const copyPlayer = JSON.parse(JSON.stringify(player)); //deep clone, won't mutate
    copyPlayer.tetrominos = rotate(copyPlayer.tetrominos, dir)

    setPlayer(copyPlayer)
  }

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
      pos: {x: STAGE_WIDTH/2 - 2,y: 0},
      tetrominos: randomTetromino().shape,
      collided: false
    })
  }, [])


  return [player, updatePlayerPos, resetPlayer, playerRotate];
}