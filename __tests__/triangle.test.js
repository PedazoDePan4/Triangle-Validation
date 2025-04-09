// __tests__/task-manager.test.js

const triangle = require('../server/triangle.js');

describe('Valid Triangle Types', () => {

  test('isoceles triangle', () => {
    expect(triangle.triangleType(2, 2, 3)).toBe('Isosceles');
  });

  test('equilateral triangle', () => {
    expect(triangle.triangleType(2, 2, 2)).toBe('Equilateral');
  });

  test('scalene triangle', () => {
    expect(triangle.triangleType(2, 3, 4)).toBe('Scalene');
  });
});

describe('Invalid Triangle Types', () => {

  test('invalid triangle', () => {
    expect(triangle.triangleType(1, 2, 3)).toBe('Invalid');
  });

  test('impossible triangle', () => {
    expect(triangle.triangleType(1, 3, 1)).toBe('Invalid');
  });
  
  test('sides of 0', () => {
    expect(triangle.triangleType(0, 1, 0)).toBe('Invalid');
  });

  test('negative sides length', () => {
    expect(triangle.triangleType(2, -2, 2)).toBe('Invalid');
  });

  // the code can handle floats, this test wont pass
  test('floating point values', () => {
    expect(triangle.triangleType(2, 2.2, 2)).toBe('Invalid');
  });

  // the code does not consider inputs with the wrong number of parameters
  test('wrong amount of parameters', () => {
    expect(triangle.triangleType(2, 2)).toBe('Invalid');
  });

  test('wrong amount of parameters', () => {
    expect(triangle.triangleType(2, 2, 2, 2)).toBe('Invalid');
  });
});