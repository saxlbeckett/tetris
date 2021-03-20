import React from 'react';
import {StyledCell} from './Styles/StyledCell'
import {TETROMINOS} from '../StagePieces/tetrominos'

const Cell = ({type}) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>Cell</StyledCell>
)

export default Cell;