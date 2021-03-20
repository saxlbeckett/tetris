import React from 'react';
import {StyledCell} from './Styles/StyledCell'
import {TETROMINOS} from '../StagePieces/tetrominos'

const Cell = ({type, width, hieght}) => (
  <StyledCell type={'L'} color={TETROMINOS['L'].color} width={width} height={hieght}/>
)

export default Cell;