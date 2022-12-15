
// STDIN with function
process.stdout.write('Enter a value: ')

process.stdin.on('data', function(data) {
    
    let val1 = data.toString()
    process.stdout.write(`Value 1 : ${val1}`)
    process.exit()
})