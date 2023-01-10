
const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)


rl.question('Whats your name : ', (answer) => {
    console.log(`Your full name is ${answer}`)
    process.exit()
})