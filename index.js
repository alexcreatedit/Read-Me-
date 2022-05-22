// TODO: Include packages needed for this application
var fs = require('fs');
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// Prompt that takes user input for Title, Description, Table of Contents, Installation type
// Usage, License type, Contributing, Test, Questions, Email address and GitHub username
const questions = 
  [
    {
        type: 'input',
        message: 'What is your project title name?',
        name: 'Title',
      },
      {
        type: 'input',
        message: 'Give a short description',
        name: 'Description',
      },
      {
        type: 'confirm',
        message: 'List your table of contents?',
        name: 'Table of Contents',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'How do you install you app?',
      },
      {
        type: 'input',
        message: 'What is this being used for?',
        name: 'Usage',
      },
      {
        type: 'checkbox',
        message: 'What license do you intend to use?',
        name: 'License',
        choices: ['MIT', 'ISC', 'Drivers'],
      },
      {
        type: 'input',
        message: 'Name or list contributions',
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'What can you use to test this project?',
        name: 'Tests',
      },
      {
        type: 'input',
        message: 'Where can questions be answered?',
        name: 'Questions',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub',
      },

    ];

// TODO: Create a function to write README file
function writeToFile(fileName,data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!')
)}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then(response => writeToFile('Read-me.md', response))
      .catch(err => console.error(err));
}

// Function call to initialize app
init();