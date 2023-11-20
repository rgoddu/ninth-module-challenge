// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

const readme = require("./readme.js");

// TODO: Create a function to initialize app
async function init() {

inquirer.prompt(
    
// TODO: Create an array of questions for user input
    readme.arrayOfInputs)
  .then((answers) => {
    const READMEPageContent = readme.writeToFile(answers);

// TODO: Create a function to write README file
    fs.writeFile('README.md', READMEPageContent
    );
  });
}

// Function call to initialize app
  init();