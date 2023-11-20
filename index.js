// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

const readme = require("./readme.js");

// TODO: Create a function to initialize app
async function init() {

inquirer.prompt(
    
// TODO: Create an array of questions for user input
    [{
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter a description of how to install your product',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter a description of how to use your product',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter information about contributing to your project',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Explain how to test your product',
    },
  ])
  .then((answers) => {
    const READMEPageContent = readme.writeToFile(answers);

// TODO: Create a function to write README file
    fs.writeFile('README.md', READMEPageContent
    );
  });
}

// Function call to initialize app
  init();