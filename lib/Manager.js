//Import parent Employee class
//const Employee = require('./Employee')

//Manager class extends the Employee class
class Manager{
    constructor(officeNumber){
        
        this.officeNumber = officeNumber;
    }
    getOffice(){
            return this.officeNumber
          }
    
    //Overridden to return 'Manager'
    getRole(){
      return 'Manager'
    }
}
module.exports = Manager;