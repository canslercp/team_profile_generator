//Import parent Employee class
const Employee = require('.Employee')

//Manager class extends the Employee class
class Intern extends Employee{
    constructor(school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return inquirer
          .prompt([
        {
            type: 'input',
            name: 'school',
            message: `What is the ${getRole()}'s school?`
        }
          ])
          .then(school => {
            
          })
    }

    //Overridden to return 'Intern'
    getRole(){}
}