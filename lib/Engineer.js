//Import parent Employee class
const Employee = require('.Employee')

//Manager class extends the Employee class
class Engineer extends Employee{
    constructor(gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGithub(){}

    //Overridden to return 'Engineer'
    getRole(){}
}