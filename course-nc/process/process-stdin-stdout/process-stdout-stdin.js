
// STDOUT
// This is the command to output data by console

process.stdout.write('USE STDOUT NODEJS without jump line')
process.stdout.write('USE STDOUT NODEJS with jump line \n')


// STDIN
// This is the command to input data by console

let val1
process.stdin.on('data', function() {
    val1 = data.toString()
    process.exit()
})







