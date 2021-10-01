const init = require('../index')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(answers) {
  if (answers.license == "MIT") {
    let licenseInfo = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    return licenseInfo
  } else if (answers.license == "GPLv3") {
    let licenseInfo = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    return licenseInfo
  } else if (answers.license == "Apache 2.0") {
    let licenseInfo = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    return licenseInfo
  } else if (answers.license == "BSD 3") {
    let licenseInfo = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    return licenseInfo
  } else {
    let licenseInfo = ""
    return licenseInfo
  }
}

function generateMarkdown(answers) {
 return `${answers.title}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#How-to-Contribute)
  - [Tests](#Tests)
  ## Installation
  
  ${answers.instructions}
  
  ## Usage
  
  ${answers.howToUse}
  
  ## License

  ${renderLicense(answers.license)}
 
  ## How to Contribute

  ${answers.contributions}
  
  ## Tests

  ## Contact Me

  Email: ${answers.email}
 
  GitHub: https://github.com/${answers.user}

`;
}

module.exports = generateMarkdown;
