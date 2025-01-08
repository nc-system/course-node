
const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)

const people = {
    name: '',
    comments: []
}

rl.question('Whats your name : ', (answer) => {
    
    people.name = answer

    rl.setPrompt('Get me a comments : ')
    rl.prompt()
    // process.exit()
})