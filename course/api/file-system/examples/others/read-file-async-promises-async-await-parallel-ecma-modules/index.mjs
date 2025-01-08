
// readFile es Asynchronous
// The Library Node:fs/promises use promises

import { readFile } from 'node:fs/promises';

Promise.all([
    console.log('Reading ... File 1'),
    readFile('./file1.txt', 'utf-8'),
    readFile('./file2.txt', 'utf-8'),
    console.log('Reading ... File 2')
]).then(([text1, text2]) => {
    console.log('First text: ', text1)
    console.log('Second text: ', text2)
})


// Como ya es asyncropnous puede hacer otras cosas mientras va lyendo el file 1
// console.log('Secondary action while reading file')






