
// Example 1
// Function for control process

// Use
// $ node example1 --name "Andres" --lastname "Giraldo" --age "43"

function param(p) {
    let index = process.argv.indexOf(p)
    //console.log(index)
    return process.argv[index + 1]
}

let name = param('--name')
let lastname = param('--lastname')
let age = param('--age')

//console.log( nombre )
//console.log( lastname )
//console.log( age )

console.log(`Your name is ${name} ${lastname} and you age is: ${age}`)

