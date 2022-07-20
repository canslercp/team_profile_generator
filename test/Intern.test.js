const Intern = require('../lib/Intern')
const intern = new Intern('UNC Charlotte')

describe('Intern', () => {
    it('Can set school via constructor', () => {
      expect(intern.school).toEqual('UNC Charlotte');
});

it('getRole() should return "Intern"', () => {
    expect(intern.getRole()).toEqual('Intern');
});

it('Can get school via getSchool()', () => {
    expect(intern.getSchool()).toEqual('UNC Charlotte');
});
     
})