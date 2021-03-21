import React, {useState} from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton'; 
import {usePlayer} from '../Hooks/usePlayer';
import {useStage} from '../Hooks/useStage'
import { StyledTetrisWrapper, StyledTetris } from './Styles/StyledTetris';
import {createStage} from '../StagePieces/gameHelper'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer(); 
  const [stage, setStage] = useStage(player);

console.log('re-render')

  const movePlayer = (dir) => {

  }

  const startGame = () => {

  }

  const drop = () => {

  }

  const dropPlayer = () => {

  }

  const move = ({keyCode}) => {

  }

  return(
    <div>Ready to play?
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage}/>
          <aside>
            {gameOver ? (
              <Display gameOver={gameOver} text="GAME OVER"/>
            ) :
            <div>
              <Display text="Score"/>
              <Display text="Rows" />
              <Display text="Levels"/>
         {/* might want to create a different   component for this */}
              <Display text="Time"/> 
            </div>
            }
            <StartButton/>
         </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
    </div> 
  )
}


export default Tetris;