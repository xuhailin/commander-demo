#!/usr/bin/env node

var program = require('commander');
program
 .version('0.1.0')
 .option('-f, --foo', 'enable some foo')
 .option('-b, --bar', 'enable some bar')
 .option('-B, --baz', 'enable some baz');

program.on('--help', function(){
    console.log('   Example:');
    console.log('');
    console.log('    $ custom-help --help');
    console.log('    $ custom-help -h');
    console.log('');
});

program.parse(process.argv);

console.log('stuff');