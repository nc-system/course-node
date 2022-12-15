
let questions = [
    'What your name: ',
    'What your lastname: ',
    'What is your favorite language: ',
]
let answers = []

function question(i) {
    process.stdout.write(questions[i])
}

process.stdin.on('data', function(data){
    
    answers.push(data.toString().trim())

    if (answers.length < questions.length) {
        question(answers.length)
    } else {
        process.exit()
    }
})

question(0)