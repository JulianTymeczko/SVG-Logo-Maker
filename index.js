const inquirer = require('inquirer');
const fs = require('fs')
const createSVG = require('./util/createSVG')
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What text colour would you like?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape would you like?',
      name: 'shape',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      message: 'What is the colour of the shape you would like?',
      name: 'shapeColor',
    },
  ])
  .then((response) => { 
    
    const { textColor, shape, shapeColor } = response
    const SVG = createSVG(textColor, shape, shapeColor)
    const filename = `logo.svg`
    fs.writeFile(filename, SVG, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg"))
   console.log(response)
  }
  );
