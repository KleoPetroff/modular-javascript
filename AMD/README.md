# Asynchronous Module Definition (AMD)

The overall goal for the AMD format is to provide a solution for modular JavaScript that developers can use today. AMD is specifically designed for browser environments, but can also be used it non-browser environments. It's used by jQuery, dojo, Mootools and other libraries and frameworks.

The AMD module is a proposal for defining modules where both the module and dependencies can be asynchronously loaded. There are several advantages of using AMD:

- AMD modules are flexible.
- Plugins support(extremely useful and powerful).
- Can load more than just JavaScript files
- Works in the browser without a build
- Is asynchronous by nature
- Avoid globals by default since modules are wrapped in closures

## Getting Started

The first two concepts worth noting about AMD are the idea of a ``define` method for creating module definition and a `require` method for handling dependency loading. There are just three things to remember:

1. Wrap your code in `define()`
2. List your dependencies 
3. Return somethings!

### AMD define()
The `define()` method announces to the AMD environment that we wish to declare a module and is used to define named or unnamed modules based on using the following signature:

```
define(
    module_id /* optional */,
    [dependencies] /* optional */,
    definition function /* function for instantiating the module or object */
);
```

The `module_id` is an optional argument which is typically only required when non-AMD concatenation tools are being used. When the argument is being left, we refer to the module as *anonymous*.

When working with anonymous modules, the idea of a module's identity is [DRY](https://www.wikiwand.com/en/Don't_repeat_yourself), making it easy to avoid duplication of filenames and code. Because the code is more portable, it's easy to move the module to other locations without needing to alter the code itself or change it's module ID. Consider the `module_id` similar to the concept of folder paths.

The dependencies argument represents an array of dependencies which are required by the module we are defining and the third argument(called "definition function" or "factory function") is a function that's executed ti instantiate our module. A bare bone module could be defined as follows:

```js
define('myModule',
        
        ['dep1', 'dep2'],
        function(dep1, dep2) {
        var myModule = {
            doSomething: function() {
                console.log('Hello World!');
            }
        }
        return myModule;
});
```

Different implementation of `define()` is:

```js
define('myModule', ['dep1', 'dep2'], 
        function(dep1, dep2) {
            return {
                plot: function(x,y) {
                    return dep2.draw(dep1.random(x,y));
            }
})
```
### AMD require()

require is typically used to load code in a top-level JavaScript file or within a module where we wish to dynamically fetch dependencies.

```js
require(['dep1', 'dep2'], function(dep1, dep2) {
    dep1.doSomething();
})
```
There are two kind of `require()` functions - *local* and *global*. The local `require` is passed to the factory function. Here is an example:

```js
define(function(require) {
    var isReady = false, 
        foobar;
    
    require(['dep1', 'dep2'], function(dep1, dep2) {
        isReady = true;
        foobar = dep1() + dep2();
    });
    
    return {
        isReady: isReady,
        foobar: foobar
    };
});
```

By calling `require` as parameter, so we can use it inside our `define()` function to call other modules (JavaScript files).

A global `require()` is one that is available in the global scope, like `define()`. Let's see an example of require, using [RequireJS](http://requirejs.org):

```js
require(['app/myModule'], function(myModule) {
    return myModule.doStuff();
});
```

This example can be looked at as `requirejs(['depencencies'], function(){})`, which indicates the loader's top level globals.

## Additional Reading

More information, resources and articles can be found here: [devlog - AMD and RequireJS](https://github.com/KleoPetroff/dev-log/blob/master/source/amd-requirejs.md) (any kind of contribution to that repository will be greatly appreciated).