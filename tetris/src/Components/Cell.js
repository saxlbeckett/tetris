import React from 'react';
import {TETROMINOS} from '../StagePieces/tetrominos'

const Cell = ({type}) => (
  // do need to add color from the tetrominos object 
  <div type={type}>Cell</div>
)

export default Cell;