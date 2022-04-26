// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project title name?',
      },
      {
        type: 'input',
        message: 'Give a short description',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'List your table of contents',
        name: 'Table of Contents',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What packages would you like to use?',
      },
      {
        type: 'input',
        message: 'What is this being used for?',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'What license do you intend to use?',
        name: 'License',
        choices: ['MIT', 'ISC', 'Drivers'],
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'Name or list contributions',
      },
      {
        type: 'input',
        message: 'What test were ran on your project?',
        name: 'Tests',
      },
      {
        type: 'input',
        message: 'What questions did you have?',
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
    /* Pass your questions in here */
  ]).then(data =>{
        writeToFile(data)
   }) ;

// TODO: Create an array of questions for user input
// var questions = [];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('Read-me.md', generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!')
)};



// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init()
