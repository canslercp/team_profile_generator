const Employee = require('../lib/Employee')

describe('Employee', () => {
    it('Can instantiate Employee instance', () => {
      const employee = {"email": "canslercp@gmail.com", "id": "4", "name": "Corbin"};
      
      const manager = new Employee('Corbin', '4', 'canslercp@gmail.com');

      expect(manager).toEqual(employee);
});

it('Can set name via constructor arguments', () => {
    const manager = new Employee('Corbin', '4', 'canslercp@gmail.com');

    expect(manager.name).toEqual('Corbin');
});

it('Can set id via constructor argument', () => {

    expect();
});

it('Can set email via constructor argument', () => {

    expect();
});

it('Can get name via getName()', () => {

    expect();
});

it('Can get id via getId()', () => {

    expect();
});

it('Can get email via getEmail()', () => {

    expect();
});

it('getRole() should return "Employee"', () => {

    expect();
});
    
})