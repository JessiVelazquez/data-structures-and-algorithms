'use strict';

//================IMPORTS================\\
// const Stack = require('../lib/stacks.js');
const multiBracketValidation = require('../lib/multi-bracket-validation.js');

//==============STACK TESTS===============\\
describe('multi bracket validation', () => {

  it('should return true if brackets are validated', () => {
    let input = '()[]{}';
    let result = multiBracketValidation(input);
    expect(result).toEqual(true);
  });

  it('should return false if brackets are not validated', () => {
    let input = '()[]{}(';
    let result = multiBracketValidation(input);
    expect(result).toEqual(false);
  });

  it('should return true if brackets are validated and string includes extra characters', () => {
    let input = '(i)[like]{pizza}';
    let result = multiBracketValidation(input);
    expect(result).toEqual(true);
  });

});
