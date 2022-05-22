// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseType = license.license;
//   let yourLicense = ''
//   if(licenseType === 'MIT'){
//     yourLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  http://github.com/${data.Username}/${data.Title}
  # Description 
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Liscense](#liscense)
  * [Constributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  Listed below are the dependencies that must be installed to run the project.
  # Usage
  The usage of this application is, ${data.Usage}
  # Liscense
  The Liscense used for the project is ${data.Liscense} liscense.
  ![Github liscense](http://img.shields.io/badge/liscense-MIT-blue-svg)
  # Contributing
  Contributors to the project include: ${data.Contributing}
  # Tests
  The following command is required to test run the project: ${data.Tests}
  # Questions
  If you have any questions about the project contact ${data.Username} ${data.Email}
`;
}

module.exports = generateMarkdown;
