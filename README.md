# Triangle Type Validator

## Description
This project is a Node.js application designed to classify triangles based on their side lengths. It includes a function to determine the type of triangle (e.g., Equilateral, Isosceles, Scalene, or Invalid) and a comprehensive test suite using Jest.

## Features
- Validates triangle side lengths using the triangle inequality theorem.
- Checks if the code can classify triangles as:
  - **Equilateral**: All sides are equal.
  - **Isosceles**: Two sides are equal.
  - **Scalene**: All sides are different.
  - **Invalid**: Does not satisfy the triangle inequality theorem or has invalid input.
- Checks if the code can handle the following cases:
  - Impossible triangles
  - Negative or zero side lengths.
  - Floating-point values.
  - Incorrect number of parameters.

### P.S: Some of the tests were made with the intention to fail
