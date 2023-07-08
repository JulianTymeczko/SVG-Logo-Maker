

function createSVG(textColor, shape, shapeColor) {
    
    if (shape == 'circle'){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
  
</svg>
    `}
    else if (shape == 'square'){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect x="70" y="20" width="160" height="160"  fill="${shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
      
</svg>
        `}
    
    else if (shape == 'triangle'){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="25,200 150,0 275,200" fill="${shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
      
</svg>
        `}
    
    
    
    
    
   
  }


module.exports = createSVG  
  