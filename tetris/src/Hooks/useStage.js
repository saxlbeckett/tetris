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
    }

    setStage(prev => updateStage(prev))

  }, [])


  return [stage, setStage];
}