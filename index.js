const inquirer = require('inquirer');
const fs = require('fs')
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What text colour would you like?',
      name: 'Text-colour',
    },
    {
      type: 'list',
      message: 'What shape would you like?',
      name: 'Shape',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      message: 'What is the colour of the shape you would like?',
      name: 'Shape-colour',
    },
  ])
  .then((response) =>
    console.log(response)
     
  );
