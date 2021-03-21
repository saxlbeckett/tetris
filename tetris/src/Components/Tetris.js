import React, {useState} from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton'; 
import {usePlayer} from '../Hooks/usePlayer';
import {useStage} from '../Hooks/useStage'
import { StyledTetrisWrapper, StyledTetris } from './Styles/StyledTetris';
import {createStage, checkCollision} from '../StagePieces/gameHelper'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPost, resetPlayer] = usePlayer(); //call the hook you are using 
  const [stage, setStage] = useStage(player); //call the stage you are creating 

  const movePlayer = (dir) => {
    //move left and right
    if(!checkCollision(player, stage, {x:dir, y: 0})) {
      updatePlayerPost({x:dir, y:0})
    }
  }

  const startGame = () => {
    //reset everything
    setStage(createStage());
    resetPlayer(); //not yet currently
    //if we use as restart, it will also reset displays 
    console.log('hit the start button')
    gameOver(false)
  }

  const drop = () => {

    if(!checkCollision(player, stage, {x:0, y: 1})) {
      updatePlayerPost({x:0, y:1, collided: false})
    } else {
      //loose condition 

        if([player.pos.y < 1]) {
          console.log('GAME OVER')
          setGameOver(true);
          setDropTime(null);

        }
      updatePlayerPost({x: 0, y:0, collided: true})
    }
  }

  const dropPlayer = () => {
    drop()
  }

  const move = ({keyCode}) => {
    //include the event of the movement? Does this need to be an use effect? 
    //logic should also include that a collision has not occurred, nor reach the end. 
    if(!gameOver) {
      //left arrow
      if(keyCode === 37) {
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
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={event => move(event) }>
      <StyledTetris>
        <Stage stage={stage}/>
          <aside>
            {gameOver ? (
              <Display gameOver={gameOver} text="GAME OVER"/>
            ) : (
              <div>
              <Display text="Score"/>
              <Display text="Rows" />
              <Display text="Levels"/>
         {/* might want to create a different   component for this */}
              <Display text="Time"/> 
            </div>
            )
            }
            <StartButton callback={startGame}/>
         </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
    </div> 
  )
}


export default Tetris;