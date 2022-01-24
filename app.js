import yargs from 'yargs';



yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note')
    }
});


yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
});

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function(){
        console.log('Listing the note')
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading the note')
    }
});

console.log(yargs.argv);