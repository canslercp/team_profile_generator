//Import parent Employee class
const Employee = require('.Employee')

//Manager class extends the Employee class
class Intern extends Employee{
    constructor(school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){}
    
    //Overridden to return 'Intern'
    getRole(){}
}