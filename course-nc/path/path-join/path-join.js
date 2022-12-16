
var path = require('path')


// Path Join 
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
// Returns: /foo/bar/baz/asdf

// Path Join + __dirname
console.log(path.join(__dirname, '/foo', 'bar', 'baz/asdf', 'quux', '..'))
// returns: /home/andres/NC/NC-SYS/COURSES/course-node/course-nc/path/path-join/foo/bar/baz/asdf