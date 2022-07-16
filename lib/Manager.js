//Import parent Employee class
const Employee = require('.Employee')

//Manager class extends the Employee class
class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //Overridden to return 'Manager'
    getRole(){}
}