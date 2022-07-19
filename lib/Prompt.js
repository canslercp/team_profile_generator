//Packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// the Prompt constructor is responsible for controlling the overall flow of the prompt

// Array of questions about team manager for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's employee ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email address?"
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the manager's office number?"
    },
    {
        type: 'list',
        name: 'managerMenu',
        message: 'Would you like to add an engineer or an intern? Or are you finished building your team?',
        choices: ['engineer', 'intern', 'finished building']
    }
]

//Array of questions about engineer for user input
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's employee ID?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email address?"
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the engineer's GitHub username?"
    },
    {
        type: 'list',
        name: 'engineerMenu',
        message: 'Would you like to add another engineer or an intern? Or are you finished building your team?',
        choices: ['engineer', 'intern', 'finished building']
    }
]

//Array of questions about intern for user input
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's employee ID?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email address?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What school does/ did the intern attend?"
    },
    {
        type: 'list',
        name: 'internMenu',
        message: 'Would you like to add an engineer or another intern? Or are you finished building your team?',
        choices: ['engineer', 'intern', 'finished building']
    }
]

// // Function to write HTML file?..
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err) throw err;
//         console.log('Complete!')
//     })
// }

// A function to initialize app
function init() {
    console.log('Welcome to the team generator!');
    console.log("Use 'npm run reset' to reset the dist/ folder");

    inquirer.prompt(managerQuestions)
        .then((res) => {
            const manager = new Employee(res.managerName, res.managerId, res.managerEmail);
            const managerOffice = new Manager(res.managerOffice);

            switch (res.managerMenu) {
                case 'engineer':
                    engineerPrompt()
                    break;
                case 'intern':
                    internPrompt()
                    break;
                default:
                    console.log('Generating HTML...');
                    console.log(manager);
            }
            // console.log('Generating HTML...')
            //writeToFile('./dist/index.html',generateMarkdown(res));
        })
}

//A function for the engineer prompt
function engineerPrompt(){
    inquirer.prompt(engineerQuestions)
    .then((res) => {
        const engineer = new Employee(res.engineerName, res.engineerId, res.engineerEmail);
        const gitHub = new Engineer(res.engineerGithub);

        switch (res.engineerMenu) {
            case 'engineer':
                engineerPrompt()
                break;
            case 'intern':
                internPrompt()
                break;
            default:
                console.log('Generating HTML...');
        }
    })
}

//A function for the engineer prompt
function internPrompt(){
    inquirer.prompt(internQuestions)
    .then((res) => {
        const engineer = new Employee(res.internName, res.internId, res.internEmail);
        const school = new Intern(res.internSchool);

        switch (res.internMenu) {
            case 'engineer':
                engineerPrompt()
                break;
            case 'intern':
                internPrompt()
                break;
            default:
                console.log('Generating HTML...');
        }
    })
}

// Function call to initialize app
init();



