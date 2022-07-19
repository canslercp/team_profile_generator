class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
      return this.name
    //     return inquirer
    //   .prompt([
    //     {
    //     type: 'input',
    //     name: 'name',
    //     message: `What is the ${this.role}'s name?`
    // }
    //   ])
    //   .then(name => {

    //   })
    }

    getID(){
        return inquirer
      .prompt([
    {
        type: 'input',
        name: 'id',
        message: `What is the ${getRole()}'s employee ID?`
    }
      ])
      .then(id => {
        
    })
    }

    getEmail(){
        return inquirer
      .prompt([
    {
        type: 'input',
        name: 'email',
        message: `What is the ${getRole()}'s email address?`
    }
      ])
      .then(email => {
        
      })
    }

    //Returns employee
    getRole(){}
}

module.exports = Employee;