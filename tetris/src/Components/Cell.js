import React from 'react';
import {StyledCell} from './Styles/StyledCell'
import {TETROMINOS} from '../StagePieces/tetrominos'

const Cell = ({type}) => (
  <StyledCell type={'L'} color={TETROMINOS[type].color} />
)

export default Cell;