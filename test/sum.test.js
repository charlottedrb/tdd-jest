const sum = require('../src/sum');

test('adds 1 + 1 to equal 2', () => {  
    const firstNum = 1
    const secondNum = 1
    expect(typeof firstNum).toBe("number")   
    expect(typeof secondNum).toBe("number")   
    expect(sum(firstNum, secondNum)).toBe(2);
});
