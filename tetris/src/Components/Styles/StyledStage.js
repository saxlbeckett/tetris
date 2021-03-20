import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-area: auto;
  grid-template-row: repeat(${props => props.height}, cal(25vw / ${props => props.width}));
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: .05px;
  border: 2px solid #333;
  width:100%;
  max-width: 45vw;
  max-height: 100vh
  background: #111; 
`

//responsive squares need a little work.