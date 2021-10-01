function renderLicense(license) {
  let licenseInfo;
  if (license == 'MIT') {
     licenseInfo = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    return `${licenseInfo}`
  } else if (license == "GPLv3") {
     licenseInfo = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    return `${licenseInfo}`
  } else if (license == "Apache 2.0") {
     licenseInfo = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    return `${licenseInfo}`
  } else if (license == "BSD 3") {
     licenseInfo = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    return `${licenseInfo}`
  } else if(license == "None") {
     licenseInfo = ""
    return `${licenseInfo}`
  }
}

function generateMarkdown(answers) {
 return `# ${answers.title}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Contact Me](#contact-me)
  ## Installation
  
  ${answers.instructions}
  
  ## Usage
  
  ${answers.howToUse}
  
  ## License

  ${renderLicense(answers.license)}
 
  ## How to Contribute

  ${answers.contributions}
  
  ## Tests

  ${answers.test}

  ## Contact Me

  Email: ${answers.email}
 
  GitHub: https://github.com/${answers.user}

`;
}

module.exports = generateMarkdown;
