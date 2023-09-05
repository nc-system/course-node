
// IMPORTACION

// Forma 1 - By default (Se puede poner el nombre que queramos a la importacion) 
// var path = require('path')
// let path = require('path')
const path = require('path')

console.log(__filename)
console.log(path.basename(__filename))
console.log(path.join(__dirname, 'www', 'img', 'home', 'uploads'))

// Forma 2 - How a Object (Se debe poner el mismo nombre con el que se exporto)
const { sum } = require('./examples/example-02/sum.js')

console.log(sum(987, 654868))




// EXPORTAR

// Forma 1 - By Default
module.exports = sum


// Forma 2 - How a Object
module.exports = {
    sum
}

