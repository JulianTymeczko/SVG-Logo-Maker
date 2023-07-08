const createSVG = require('../util/createSVG')

describe('createSVG', () => {
    it('should generate the SVG content with the provided attributes', () => {
        const textColor = 'red';
        const shape = 'circle';
        const shapeColor = 'blue';

        const expectedSVGContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
  
</svg>
    `;

        const result = createSVG(textColor, shape, shapeColor);
        expect(result).toEqual(expectedSVGContent);
    });
});