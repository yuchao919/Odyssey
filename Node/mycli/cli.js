#!/usr/bin/env node

const { program } = require('commander');

program
  .command('greet <name>')
  .description('Greet a person')
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

program.parse(process.argv);