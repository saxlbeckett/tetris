import styled from 'styled-component';

export const StyledCell = styled.div`
  width: auto;
  background: #000000;
  border: ${props => props.type === 0 ? '0px solid' : '4px solid'};
  border-bottom-color: 
`