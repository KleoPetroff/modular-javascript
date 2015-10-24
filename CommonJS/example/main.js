// Require the whole module
var func = require('./first-module');

// Require specific function from module
var hello = require('./second-module').helloWorld;

// Invoking the functions from first-module
console.log(func.foo(), '|', func.bar()); // will return "I'm a foo function in module. | I'm a bar function"

// Invoking the helloWorld function from second-module
console.log(hello()); // will return "Hello World"
console.log(hello.dontMindMe()); // will throw error, because we are not exposing the that function

