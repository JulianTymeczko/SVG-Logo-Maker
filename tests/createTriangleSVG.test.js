const createSVG = require('../util/createSVG')

describe('createSVG', () => {
    it('should generate the SVG content with the provided attributes', () => {
        const textColor = 'red';
        const shape = 'triangle';
        const shapeColor = 'blue';

        const expectedSVGContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="25,200 150,0 275,200" fill="${shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
      
</svg>
        `;

        const result = createSVG(textColor, shape, shapeColor);
        expect(result).toEqual(expectedSVGContent);
    });
});