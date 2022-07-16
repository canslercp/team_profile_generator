//Packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');

//the Prompt constructor is responsible for controlling the overall flow of the prompt

//Array of questions about team manager for user input
// const managerQuestions = [
//     {
//         type: 'input',
//         name: 'managerName',
//         message: "What is the team manager's name?"
//     },
//     {
//         type: 'input',
//         name: 'managerId',
//         message: "What is the manager's employee ID?"
//     },
//     {
//         type: 'input',
//         name: 'managerEmail',
//         message: "What is the manager's email address?"
//     },
//     {
//         type: 'input',
//         name: 'managerOffice',
//         message: "What is the manager's office number?"
//     },
//     {
//         type: 'list',
//         name: 'managerMenu',
//         message: 'Would you like to add an engineer or an intern? Or are you finished building your team?',
//         choices: ['engineer', 'intern', 'finished building']
//     }
// ]

// //Array of questions about engineer for user input
// const engineerQuestions = [
//     {
//         type: 'input',
//         name: 'engineerName',
//         message: "What is the engineer's name?"
//     },
//     {
//         type: 'input',
//         name: 'engineerId',
//         message: "What is the engineer's employee ID?"
//     },
//     {
//         type: 'input',
//         name: 'engineerEmail',
//         message: "What is the engineer's email address?"
//     },
//     {
//         type: 'input',
//         name: 'engineerGithub',
//         message: "What is the engineer's GitHub username?"
//     },
//     {
//         type: 'list',
//         name: 'engineerMenu',
//         message: 'Would you like to add another engineer or an intern? Or are you finished building your team?',
//         choices: ['engineer', 'intern', 'finished building']
//     }
// ]

// //Array of questions about intern for user input
// const internQuestions = [
//     {
//         type: 'input',
//         name: 'internName',
//         message: "What is the intern's name?"
//     },
//     {
//         type: 'input',
//         name: 'internId',
//         message: "What is the intern's employee ID?"
//     },
//     {
//         type: 'input',
//         name: 'internEmail',
//         message: "What is the intern's email address?"
//     },
//     {
//         type: 'input',
//         name: 'internSchool',
//         message: "What school does/ did the intern attend?"
//     },
//     {
//         type: 'list',
//         name: 'internMenu',
//         message: 'Would you like to add an engineer or another intern? Or are you finished building your team?',
//         choices: ['engineer', 'intern', 'finished building']
//     }
// ]

// // TODO: Create a function to write HTML file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err) throw err;
//         console.log('Complete!')
//     })
// }

// // TODO: Create a function to initialize app
// function init() {
    
//     inquirer.prompt('Welcome to the team generator!', "Use 'npm run reset' to reset the dist/ folder", managerQuestions).then((res) => {
//             console.log('Generating HTML...')
//             //writeToFile('./dist/index.html',generateMarkdown(res));
//     })}

// // Function call to initialize app
// init();



