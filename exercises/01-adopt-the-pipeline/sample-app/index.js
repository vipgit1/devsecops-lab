// Tiny sample app for the DevSecOps lab. It only prints a message and exits.
const _ = require('lodash');
const args = require('minimist')(process.argv.slice(2));
console.log(_.capitalize('hello from the lab'), args);
