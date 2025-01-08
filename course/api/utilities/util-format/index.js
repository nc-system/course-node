
const util = require('util')

let name = 'Andres'
let lastname = 'Giraldo' 

const text = util.format("Hello your name is: ", name, lastname)
console.log(text)