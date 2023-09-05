
/*
os.arch()#
Added in: v0.5.0
Returns: <string>

- Returns the operating system CPU architecture for which the Node.js binary was compiled. 
    Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', and 'x64'.

- The return value is equivalent to process.arch.
*/

const os = require('node:os')

console.log('Show the operating system CPU architecture', os.arch())