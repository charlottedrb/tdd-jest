const sum = require('../src/sum');
const multiply = require('../src/multiply')

function checkNumber(firstNum, secondNum) {
    expect(typeof firstNum).toBe("number")   
    expect(typeof secondNum).toBe("number")
}

test('adds 1 + 1 to equal 2', () => {  
    const firstNum = 1
    const secondNum = 1
    checkNumber(firstNum, secondNum)
    expect(sum(firstNum, secondNum)).toBe(2);
});

test('multiplies 1 by 3 to equal 3', () => {
    const firstNum = 1
    const secondNum = 3
    checkNumber(firstNum, secondNum)
    expect(multiply(firstNum, secondNum)).toBe(2);
})
