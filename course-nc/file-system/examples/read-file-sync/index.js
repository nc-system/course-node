
// readFileSync is Synchronous

const fs = require('node:fs');

console.log('Reading ... File 1')
const file1 = fs.readFileSync('./file1.txt', 'utf-8', (err, text) => {
    console.log(file1)
})

// Como ya es asyncropnous puede hacer otras cosas mientras va lyendo el file 1
console.log('Accion secundaria mientras lee file 1')

console.log('Reading ... File 2')
const file2 = fs.readFileSync('./file2.txt', 'utf-8', (err, text) => {
    console.log(file2)
})