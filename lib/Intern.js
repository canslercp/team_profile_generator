//Import parent Employee class
// const Employee = require('./Employee')

//Manager class extends the Employee class
class Intern {
    constructor(school){
        // super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school
    }

    //Overridden to return 'Intern'
    getRole(){}
}

module.exports = Intern;