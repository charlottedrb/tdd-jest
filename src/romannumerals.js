const roman = [
    [1000, 'M'],    
    [500, 'D'], 
    [100, 'C'], 
    [50, 'L'], 
    [10, 'X'], 
    [5, 'V'], 
    [1, 'I']
]

function romannumerals(number) {
    let result = ''
    let index = 0

    do{
        if(number == roman[index][0] - 1) {
            result += roman[index + 2 ][1] + [index][1]
            number -= number
            continue
        } else if(number < roman[index][0]) {
            if(index < roman.length - 1) index++
            continue
        } else {
            result += roman[index][1]
            number -= roman[index][0]
            if(index < roman.length - 1) index++
        }
    } while(number > 0)

    console.log(result)
    return result

}

module.exports = romannumerals