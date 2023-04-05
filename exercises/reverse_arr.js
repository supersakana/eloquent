function reverseArray(arr){
    const newArr = []
    arr.forEach(item => newArr.unshift(item));
    return newArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
// => [ 5, 4, 3, 2, 1 ]

function reverseArrayInPlace(arr) {
    var i = 0,
        n = arr.length,
        middle = Math.floor(n / 2),
        temp = null;
  
    for (; i < middle; i += 1) {
       temp = arr[i]; // temp is assigned first value to be swapped
       arr[i] = arr[n - 1 - i]; // first value equals its opp
       arr[n - 1 - i] = temp; // opp equals the first value
    }
    return arr
  }
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))
// => [ 5, 4, 3, 2, 1 ]