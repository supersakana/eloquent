// write a function that takes a string as its only argument and returns a number that indicates how many uppercase B's there are

function countBs(s){
    let count = 0
    for(i = 0; i < s.length; i++){
        if(s[i] == 'B'){
            count++
        }
    }
    return count
}

// console.log(countBs('gatsBy'))

// similar to countBs, write a function that takes a second parameter (single character), and return the # of those chars in the string
function countChar(s, c){
    let count = 0
    for(i = 0; i < s.length; i++){
        if(s[i] == c){
            count++
        }
    }
    return count
}