// Write a range function that takes 2 arguments (start, end) and returns an array containing all the numbers.
function myRange(start, end){
    let result =  []
    for(i = start; i <= end; i++){
        result.push(i)
    }
    return result
}
// console.log(myRange(1, 10))

// Write a function that takes an array of numbers and returns the sum.
function mySum(nums){
    total = 0
    for(let n of nums){
        total += n
    }
    return total
}
console.log(mySum(myRange(1, 10)))

