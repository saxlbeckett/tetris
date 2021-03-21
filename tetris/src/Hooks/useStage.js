import {useState, useEffect} from 'react';
import {createStage} from '../StagePieces/gameHelper'

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = prevStage => {

      //set update the stage and reset it
      const newStage = prevStage.map(row => 
        row.map(cell => (cell[1] !== 'clear' ? [0, 'clear'] : cell)),   
      );//the end of the mapping 

      //draw my shapes
      player.tetrominos.forEach((row, y) => {
        row.forEach((value, x) => {
          if(value !== 0) {
            newStage [y+player.pos.y][x+player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ]
          }
        })
      })
      return newStage
    }//end of updateStage

    setStage(prev => updateStage(prev))

    //dependency 
  }, [player.collided, player.pos.x, player.pos.y, player.tetrominos])

  return [stage, setStage];
}