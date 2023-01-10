
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

})

rl.on('line', (input) => {

    if (input.trim() === 'exit') {
        process.exit()
    }

    people.comments.push(input.trim())
    console.info('New line ... (Ctrl + C | Write exit : To exit)')
    rl.setPrompt('Get me a comments : ')
    rl.prompt()
})