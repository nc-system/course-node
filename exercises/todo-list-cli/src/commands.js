
const { Command } = require('commander');
const program = new Command();

program
  .name('Todo List CLI')
  .description('Todo List Memory - Command Line Interfaces')
  .version('0.0.1');

program.command('save <title> <description>').action((title, description) => {
  console.log('title, description');
  console.log('Saved');
});

program.parse(process.argv);
