# CommonJS

CommonJS specifies a simple API for declaring server-side modules and unlike AMD attempts to cover broader set of concerns such as IO, file-system, promises and more. CommonJS module are one of the best solutions to JavaScript dependency management. They solve JavaScript scope issues by making sure each module is executed in its own namespace.  

From a structure perspective, a CommonJS module is a reusable piece of JavaScript which exports specific objects made available to any dependent code. Unlike AMD, there are typically no function wrappers around such modules. In each module's namespace, CommonJS adds two new variables which you can use to import and export other modules: `module.exports` and `require`. The first of these can be used to expose variables to other libraries. For example, here is how to create a library that exports a simple variable:

```js
// example.js
exports.foo = function() {
    return 'Hello World';
}
```

You can import it in another module using the `require` function:

```js
var lib = require('./example');

lib.foo() // will return 'Hello World'
```

## CommonJS and the Browser

It turns out doing this isn't too hard. The most used tool for this is [Browserify](http://browserify.org). When we run Browserify, it crawls all source code starting from some fixed entry point and packages it up into a single .js file, which can be minified.

## Additional Reading

More information, resources and articles can be found here: [devlog - CommonJS](https://github.com/KleoPetroff/dev-log/blob/master/source/commonjs.md) (any kind of contribution to that repository will be greatly appreciated).

