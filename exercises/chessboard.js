// Write a program that represents an 8x8 chessboard.
// Passing the string to console.log() should output...
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 

function chessboard(){
    let string = ''
    for(let x = 0; x < 8; x++){
        for(let y = 0; y < 8; y++){
            if ((x + y) % 2 == 0){
                string += ' '
            } else {
                string += '#'
            }
        }
        string += '\n'
    }
    console.log(string)
}
