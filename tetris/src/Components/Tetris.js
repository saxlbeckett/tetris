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
    drop()
  }

  const move = ({keyCode}) => {
    if(!gameOver) {
      //left arrow
      if(e.keyCode === 37) {
        movePlayer(-1);
        //to the right
      } else if (keyCode === 39) {
        movePlayer(1)
        //down
      } else if (keyCode === 40) {
        dropPlayer()
      }
    }
  }

  return(
    <div>Ready to play?
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e) }>
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