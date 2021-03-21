import {useState, useEffect} from 'react';
import {createStage} from '../StagePieces/gameHelper';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  //moving items
  useEffect(() => {
    const updateStage = prevStage => {
      //update the stage for 1st attempt
      const newStage = prevStage.map(row => {
        row.map(cell => (cell[1] === 'clear' ? [0,'clear'] : cell))
      })

      //draw new shape
        //go through the multi layers
      player.tetromino.forEach(row, y => {
        row.forEach((value, x) => {
          if(value !== 0) {
            newStage[y+ player.pos.y][x + player.pos.x] = [
              value,
              //merge is = collision 
              //clear = delete on next render
              `${player.collided ? 'merged' : 'clear'}`
            ]
          }
        })
      });

      return newStage
    }

    setStage(prev => updateStage(prev))
     //dependencies  
  }, [player])


  return [stage, setStage];
}