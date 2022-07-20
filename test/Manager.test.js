const Manager = require('../lib/Manager')
const manager = new Manager('4444')

describe('Manager', () => {
    it('Can set office number via constructor argument', () => {
      expect(manager.officeNumber).toEqual('4444');
});

it('getRole() should return "Manager"', () => {
    expect(manager.getRole()).toEqual('Manager');
});

it('Can get office number via getOffice()', () => {
    expect(manager.getOffice()).toEqual('4444');
});
    
})