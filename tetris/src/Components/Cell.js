import React from 'react';
import {StyledCell} from './Styles/StyledCell'
import {TETROMINOS} from '../StagePieces/tetrominos'

const Cell = ({type}) => (
  <StyledCell type={'L'} color={TETROMINOS['L'].color}/>
)

export default Cell;