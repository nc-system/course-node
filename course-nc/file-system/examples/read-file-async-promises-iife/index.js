
// readFile es Asynchronous
// The Library Node:fs/promises use promises

const fs = require('node:fs/promises')

// IIFE Inmediatly Invoked Function Expression
;(
    async () => {

        console.log('Reading ... File 1')
        fs.readFile('./file1.txt', 'utf-8')
            .then(text => {
                console.log('First text: ', text)
        })

        // Como ya es asyncropnous puede hacer otras cosas mientras va lyendo el file 1
        console.log('Secondary action while reading file')

        console.log('Reading ... File 2')
        fs.readFile('./file2.txt', 'utf-8')
            .then(text => {
                console.log('Second text: ', text)
        })

    }
)()




