
var path = require('path')

// Path  without basename
console.log('Path without basename :', __filename)

// Path with basename
console.log('Path with basename :', path.basename(__filename))