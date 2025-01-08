
/*
os.cpus()
# Added in: v0.3.3
Returns: <Object[]>
Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.

The properties included on each object include:

model <string>
speed <number> (in MHz)
times <Object>
user <number> The number of milliseconds the CPU has spent in user mode.
nice <number> The number of milliseconds the CPU has spent in nice mode.
sys <number> The number of milliseconds the CPU has spent in sys mode.
idle <number> The number of milliseconds the CPU has spent in idle mode.
irq <number> The number of milliseconds the CPU has spent in irq mode.

[
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 252020,
      nice: 0,
      sys: 30340,
      idle: 1070356870,
      irq: 0,
    },
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 306960,
      nice: 0,
      sys: 26980,
      idle: 1071569080,
      irq: 0,
    },
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 248450,
      nice: 0,
      sys: 21750,
      idle: 1070919370,
      irq: 0,
    },
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 256880,
      nice: 0,
      sys: 19430,
      idle: 1070905480,
      irq: 20,
    },
  },
]
*/

const os = require('node:os')

console.log('Show CPU Cores :', os.cpus())