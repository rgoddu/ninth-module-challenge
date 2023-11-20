function writeToFile(promise){
    switch(promise.license)
{case 'MIT': var license = "the MIT license is in use. Have at it pal!"
break;
case 'NYU': var license = "The NYU license is in use. too bad it doesn't exist!"
break;}

return(
    `## Description
${promise.description}
    ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [How To Contribute](#contribution)
- [Questions](#questions)
- [License](#license)
## Installation
${promise.installation}
## Usage
${promise.usage}
## Credits

## License
${license}

## How to Contribute
${promise.contributing}
## Tests
${promise.tests}`)
}

arrayOfInputs = [{
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
    type: 'ipnut',
    name: 'license',
    message: 'Enter license (MIT/NYU)'
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
]
module.exports = {
   writeToFile,
   arrayOfInputs
} 