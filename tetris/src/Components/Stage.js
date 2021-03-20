import React from 'react';
import Cell from './Cell';

const Stage = ({stage}) => {
  console.log(stage)// is coming across as undefined right now
  let cells = stage.map((row) => {
    row.map((cell, x) => {
      <Cell key={x} type={cell[0]}/>
    })
  })
  return(
    <div>The Stage aka Board
      {cells}
    </div>
  )
}

export default Stage;