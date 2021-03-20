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
    color: 'add color'},
  J: { 
    shape: [
            [0,'J',0],
            [0,'J',0],
            ['J','J',0]
          ], 
    color: 'add color'},
  L: { 
    shape: [
            [0,'L',0],
            [0,'L',0],
            [0,'L','L']
          ], 
    color: 'add color'},
  O: { 
    shape: [
            ['O', 'O'],
            ['O', 'O'],
          ], 
    color: 'add color'},

  S: { 
    shape: [
            [0,'S','S'],
            ['S','S',0],
            [0,0,0]
          ], 
    color: 'add color'},
  T: { 
    shape: [
            [0,0,0],
            ['T','T','T'],
            [0,'T',0]    
          ], 
    color: 'add color'},
  Z: { 
    shape: [
            ['Z','Z',0],
            [0,'Z','Z'],
            [0,0,0]
          ], 
    color: 'add color'},
}