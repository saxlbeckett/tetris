//arrays board - stage 
export const STAGE_WIDTH = 12; 
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  Array.from(Array(STAGE_HEIGHT), () => {
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  })
} 

//VISUAL OF WHAT THIS IS DOING 
// | = STAGE HEIGHT array 
// _ = STAGE WIDTH array 
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
// |_ _ _ _ _ _ _ _ _ _ _ _|  
