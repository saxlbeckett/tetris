import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton'; 
import {createStage} from '../StagePieces/gameHelper'
import { StyledTetrisWrapper, StyledTetris } from './Styles/StyledTetris';

const Tetris = () => {

  return(
    <div>Ready to play?
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()}/>
          <aside>
            <div>
              <Display text="Score"/>
              <Display text="Rows" />
              <Display text="Levels"/>
         {/* might want to create a different   component for this */}
              <Display text="Time"/> 
            </div>
            <StartButton/>
         </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
    </div> 
  )
}


export default Tetris;