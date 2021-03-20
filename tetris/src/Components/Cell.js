import React from 'react';
import {StyledCell} from './Styles/StyledCell'
import {TETROMINOS} from '../StagePieces/tetrominos'

const Cell = ({type}) => (
  <div type={type} >Cell</div>
)

export default Cell;