const init = require('../index')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (answers.licenses == "MIT") {
    answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (answers.license == "GPLv3") {
    answers.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (answers.license == "Apache 2.0") {
    answers.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (answers.license == "BSD 3") {
    answers.license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    answers.license = "none"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if(license) {
    return license
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  return `${renderLicenseBadge} 
  ${renderLicenseLink}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
 `${answers.title}
  
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

  ${renderLicenseSection}
 
  ## How to Contribute

  ${answers.contributions}
  
  ## Tests

  ## Contact Me

  Email: ${answers.email}
 
  GitHub: https://github.com/${answers.user}

`;
}

module.exports = generateMarkdown;
