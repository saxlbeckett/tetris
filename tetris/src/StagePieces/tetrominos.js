//shapes
export const TETROMINOS = {
  0: { shape: [[0]], color: 'add color here'}, //EMPTY SPACE
  I: { 
    shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
          ], 
    color: '#0000FF'},
  J: { 
    shape: [
            [0,'J',0],
            [0,'J',0],
            ['J','J',0]
          ], 
    color: '#00FF00'},
  L: { 
    shape: [
            [0,'L',0],
            [0,'L',0],
            [0,'L','L']
          ], 
    color: '#FFFF00'},
  O: { 
    shape: [
            ['O', 'O'],
            ['O', 'O'],
          ], 
    color: '#FF8000'},

  S: { 
    shape: [
            [0,'S','S'],
            ['S','S',0],
            [0,0,0]
          ], 
    color: '#FF0000'},
  T: { 
    shape: [
            [0,0,0],
            ['T','T','T'],
            [0,'T',0]    
          ], 
    color: '#CF07FF'},
  Z: { 
    shape: [
            ['Z','Z',0],
            [0,'Z','Z'],
            [0,0,0]
          ], 
    color: '#8C5CF2'},
}

//gen shapes
export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetrominos = 
    tetrominos[Math.floor(Math.random() * tetrominos.length)]//shouldn't this be minus 1? 
    return TETROMINOS[randTetrominos]
}