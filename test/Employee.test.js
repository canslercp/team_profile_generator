const Employee = require('../lib/Employee')
const manager = new Employee('Corbin', '4', 'canslercp@gmail.com');

describe('Employee', () => {
    it('Can instantiate Employee instance', () => {
        const employee = { "email": "canslercp@gmail.com", "id": "4", "name": "Corbin" };

        expect(manager).toEqual(employee);
    });

    it('Can set name via constructor arguments', () => {
        expect(manager.name).toEqual('Corbin');
    });

    it('Can set id via constructor argument', () => {
        expect(manager.id).toEqual('4');
    });

    it('Can set email via constructor argument', () => {
        expect(manager.email).toEqual('canslercp@gmail.com');
    });

    it('Can get name via getName()', () => {
        expect(manager.getName()).toEqual('Corbin');
    });

    it('Can get id via getId()', () => {
        expect(manager.getID()).toEqual('4');
    });

    it('Can get email via getEmail()', () => {
        expect(manager.getEmail()).toEqual('canslercp@gmail.com');
    });

    it('getRole() should return "Employee"', () => {
        expect(manager.getRole()).toEqual('Employee');
    });

});
