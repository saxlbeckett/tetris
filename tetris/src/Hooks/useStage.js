import {useState, useEffect} from 'react';
import {createStage} from '../StagePieces/gameHelper';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  console.log('stage', player)
  //moving items
  useEffect(() => {

    const updateStage = (prevStage) => {
      //reset from previous render
      let newStage = prevStage.map(row => {
       return row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
    
        //draw the shapes
        player.tetromino.forEach((row, y) => {
          //muli dimensional, need to find inner and outer, x, y 
          row.forEach((value, x) => {
            //check the value inside the array
            if(value !== 0) {
             return newStage[player.pos.y+=y][player.pos.x+=x] = [
                value,
                `${player.collided ? 'merged' : 'clear'}`
              ]
    
            }
          })
        })
      }); //end of the new stage stage
      return newStage;
    } //end of update stage

    setStage(prev => updateStage(prev));
  }, [player])
  
  return [stage, setStage];
};