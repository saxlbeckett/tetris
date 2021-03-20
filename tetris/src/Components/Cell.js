import React from 'react';
import {TETROMINOS} from '../StagePieces/tetrominos'

const Cell = ({type}) => (
  <div >{type}</div>
  // <div type={TETROMINOS[type].shape} color={TETROMINOS[type].color}>Cell</div>
)

export default Cell;