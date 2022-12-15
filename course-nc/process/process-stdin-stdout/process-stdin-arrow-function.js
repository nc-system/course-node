
// stdOut & stdIn with Arrow function

process.stdout.write(' Enter a value: ')
process.stdin.on('data', (data) => { let val = data.toString().trim(); process.stdout.write(`Value : ${val} \n`); process.exit(); })
