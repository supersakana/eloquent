// write a program that print all numbers from 1-100 with 2 exceptions
// numbers divisable by 3 => Fizz
// numbers divisable by 5 => Buzz
// divisiable by both => FizzBuzz

function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz')
        } else if (i % 3 == 0){
            console.log('Fizz')        
        } else if (i % 5 == 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}