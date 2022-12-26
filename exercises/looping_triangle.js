// write a loop that makes seven calls to console.log to output the following
// #
// ##
// ###
// ####
// #####
// ######
// #######

function sevenHash(){
    let i = 1
    let output = '#'

    while(i < 8){
        console.log(output)
        output = output + '#'
        i++
    }
}
