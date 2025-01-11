
import { Command } from 'commander'
import inquirer from 'inquirer'

const program = new Command();

program
  .name('Todo List CLI')
  .description('Todo List Memory - Command Line Interfaces')
  .version('0.0.1');

program.command('save').action(async () => {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your username?'
      }

    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

  // console.log('Response:', answers);
  console.log('Successfully saved');

});

program.parse(process.argv);
