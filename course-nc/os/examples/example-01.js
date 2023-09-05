
const os = require('node:os')

console.log('INFORMATION SYSTEM')

console.log('Nombre del Sistema Operativo :', os.platform())
console.log('Version del SO :', os.release())
console.log('Arquitectura :', os.arch())
console.log('CPUs :', os.cpus())
console.log('Total memoria :', os.totalmem() / 1024 / 1024)
console.log('Memoria libre :', os.freemem() / 1024 / 1024)
console.log('Tiempo del equipo encendido :', os.uptime() / 60 / 60)
