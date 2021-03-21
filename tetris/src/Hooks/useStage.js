import {useState, useEffect} from 'react';
import {createStage} from '../StagePieces/gameHelper';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  //moving items
  useEffect(() => {
    const updateStage = prevState => {
      
    }

    setStage(prev => updateStage(prev))

  }, [])


  return [stage, setStage];
}