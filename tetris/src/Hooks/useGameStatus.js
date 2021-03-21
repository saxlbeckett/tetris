import {useState, useEffect, useCallback} from 'react';

export const useGameStatus = rowsCleared => {

  const [score, setScore] = useState(0);
  const [row, setRow] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200]

  const calcScore = useCallback(() => {
      //if you score? 

      if(rowsCleared > 0) {
        setScore(prev => prev + linePoints[rowCleared - 1] * (setLevel + 1))
        setRows(prev => prev + rowsCleared)

      }
    
    },
    [level, linePoints, rowsCleared]);


    useEffect(() => {
      calcScore()
    }, [calcScore, rowsCleared, score])

    return [score, setScore, rows, setRows, level, setLevel]

}