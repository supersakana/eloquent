// We've seen the use of number % 2 == 0 to determine if a number is even or not. There is another way we can do this through recursion. Define a function (isEven) that returns true if a positive number (also works with negative numbers) is even, false if not

function isEven(n){
    if (n == 0){
        return true
    } else if (n == 1){
        return false
    } else {
        if (n < 0){
            return isEven(n + 2)
        } else {
            return isEven(n - 2)
        }
    }
}
console.log('b' == 'B')