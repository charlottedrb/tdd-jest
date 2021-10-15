function fizzbuzz(number) {
    if(number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz"
    } else if(number % 3 == 0) {
        return "Fizz"
    } else if (number % 5 == 0) {
        return "Buzz"
    }

    return number
}

module.exports = fizzbuzz

// for (let number = 1; number <= 100; number++) {
//     console.log(fizzbuzz(number))
// }

