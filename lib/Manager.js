//Import parent Employee class
const Employee = require('.Employee')

//Manager class extends the Employee class
class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOffice(){
            return inquirer
          .prompt([
        {
            type: 'input',
            name: 'office',
            message: `What is the ${getRole()}'s office number?`
        }
          ])
          .then(office => {
            
          })
        }
    

    //Overridden to return 'Manager'
    getRole(){}
}