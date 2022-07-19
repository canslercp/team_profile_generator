//Import parent Employee class
//const Employee = require('./Employee')

//Manager class extends the Employee class
class Engineer{
    constructor(gitHub){
        // super(name, id, email);
        this.gitHub = gitHub;
    }
    getGithub(){
        return this.gitHub
    }

    //Overridden to return 'Engineer'
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;