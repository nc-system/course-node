
// Example 1
// Function for control process

function param(p) {
    let index = process.argv.indexOf(p)
    //console.log(index)
    return process.argv[index + 1]
}

let nombre = param('--nombre')
let apellido = param('--apellido')

console.log( nombre )
console.log( apellido )