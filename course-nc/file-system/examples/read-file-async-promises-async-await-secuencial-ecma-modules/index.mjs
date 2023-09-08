
// readFile es Asynchronous
// The Library Node:fs/promises use promises

import { readFile } from 'node:fs/promises';

console.log('Reading ... File 1')
const text1 = await readFile('./file1.txt', 'utf-8')
console.log('First text: ', text1)

// Como ya es asyncropnous puede hacer otras cosas mientras va lyendo el file 1
console.log('Secondary action while reading file')

console.log('Reading ... File 2')
const text2 = await readFile('./file2.txt', 'utf-8')
console.log('Second text: ', text2)


