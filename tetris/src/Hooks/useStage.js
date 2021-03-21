import {useState, useEffect} from 'react';
import {createStage} from '../StagePieces/gameHelper';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  
  //moving items
  useEffect(() => {

    const updateStage = (prevStage) => {
      //reset from previous render
      const newStage = prevStage.map((row) => {
        console.log(row)
        row.map((cell) => {
          console.log(cell)
          cell[1] === 'clear' ? [0, 'clear'] : cell
        })
      })

      //draw stage - first look through the tetromoin's array
      player.tetromino.forEach((row, y) => {
        //find the value of the cell, reminder mutli-dimensional 
        row.forEach((value, x) => { 
          console.log(x)
          if(value !== 0) {
            newStage[y+player.pos.y][x+player.pos.x] = [
              value, //one of the shapes
              `${player.collided ? 'merge' : 'clear'}`
            ];
          }

        })
      })

      return newStage
    }

    setStage(prev => {
      updateStage(prev)
    })

  }, [player])
  
  return [stage, setStage];
}