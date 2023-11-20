function writeToFile(promise){
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
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
:trophy: The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## Features
If your project has a lot of features, list them here.
## How to Contribute
${promise.contributing}
## Tests
${promise.tests}`)
}
module.exports = {
   writeToFile
} 