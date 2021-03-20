import React from 'react';
import Cell from './Cell';

const Stage = ({stage}) => {
  console.log(stage)// is coming across as undefined right now
  return(
    <div>The Stage aka Board
    <Cell/>
    {/* not currently working */}
    {/* {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))} */}
    </div>
  )
}

export default Stage;