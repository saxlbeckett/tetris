import React from 'react';
import Cell from './Cell';
import {StyledStage} from './Styles/StyledStage'

const Stage = ({stage}) => {

  return(
    <StyledStage>The Stage aka Board
      {stage.map(row => row.map((cell, x) => { return <Cell key={x} type={cell[0]}/>}))}
    </StyledStage>
  )
}

export default Stage;