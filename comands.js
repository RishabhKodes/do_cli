//this is where we use commander

const program = require('commander');

const {
    addcustomer,
    findcustomer
} = require('./app')

program
    .version('1.0.0')
    .description('test cli')

program
    .command('add <firstname> <lastname> <phone>')
    .alias('a')  //it can also work as
    .description('add a customer')
    .action((firstname, lastname, phone) => {
        addcustomer({firstname, lastname, phone});
    });

program 
    .command('find <name> ')
    .alias('f')
    .description('find customer')
    .action(name => findcustomer(name));
    

program.parse(process.argv);