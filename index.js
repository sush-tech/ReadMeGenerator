// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["what si yoru readme about?", "what si this?", "what si that"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {

for(let i=0;i<questions.length;i++){
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'questions',
        message: questions[i],
      },  
    ])
    .then((data) => {
      const filename = `readMe.md`;
      writeToFile(filename,data);
    });
}
}

// Function call to initialize app
init();

