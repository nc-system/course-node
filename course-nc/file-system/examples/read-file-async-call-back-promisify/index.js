
// readFile es Asynchronous
// Node:fs is a library that use Call Back

const fs = require('node:fs');
const { promisify } = require('node:util');

const readFilePromise = promisify(fs.readFile)

console.log('Reading ... File 1')
readFilePromise('./file1.txt', 'utf-8', (err, text) => {
    console.log(text)
})

// Como ya es asyncropnous puede hacer otras cosas mientras va lyendo el file 1
console.log('Accion secundaria mientras lee file 1')

console.log('Reading ... File 2')
readFilePromise('./file2.txt', 'utf-8', (err, text) => {
    console.log(text)
})


