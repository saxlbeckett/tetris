import React from 'react';
import Cell from './Cell';

const Stage = ({stage}) => {
  console.log('in the stage : ',stage)// we got the array! 
  return(
    <div>The Stage aka Board
      {stage.map(row => row.map((cell, x) => { <Cell key={x} type={cell[0]}/>}))}
    </div>
  )
}

export default Stage;