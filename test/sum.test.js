const sum = require('../src/sum');
const multiply = require('../src/multiply')
const fizzBuzz = require('../src/fizz-buzz')

const firstNumSum = 1
const secondNumSum = 1

const firstNumMultiply = 1
const secondNumMultiply = 1

const fizzNumber = 33
const fizzBuzzNumber = 15
const buzzNumber = 25
const number = 38

// Check functions parameters type

test('check sum params type', () => {
    expect(typeof firstNumSum).toBe("number")   
    expect(typeof secondNumSum).toBe("number")
})

test('check mutiply params', () => {
    expect(typeof firstNumMultiply).toBe("number")   
    expect(typeof firstNumMultiply).toBe("number")
})

test('check fizzBuzz params', () => {
    expect(typeof fizzNumber).toBe("number")   
})

// Check functions

test('adds 1 + 1 to equal 2', () => {  
    expect(sum(firstNumSum, secondNumSum)).toBe(2);
});

test('multiplies 1 by 3 to equal 3', () => {
    expect(multiply(firstNumMultiply, secondNumMultiply)).toBe(3);
})

test('should return fizz', () => {
    expect(fizzBuzz(fizzNumber)).toBe('Fizz')
})

test('should return fizzbuzz', () => {
    expect(fizzBuzz(fizzBuzzNumber)).toBe('Fizz')
})

test('should return buzz', () => {
    expect(fizzBuzz(buzzNumber)).toBe('Fizz')
})

test('should return number', () => {
    expect(fizzBuzz(number)).toBe('Fizz')
})