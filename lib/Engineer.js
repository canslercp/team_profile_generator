//Import parent Employee class
const Employee = require('.Employee')

//Manager class extends the Employee class
class Engineer extends Employee{
    constructor(gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGithub(){
        return inquirer
          .prompt([
        {
            type: 'input',
            name: 'gitHub',
            message: `What is the ${getRole()}'s GitHub username?`
        }
          ])
          .then(github => {
            
          })
    }

    //Overridden to return 'Engineer'
    getRole(){}
}