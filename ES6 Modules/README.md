# ES6 Modules

In ECMAScript 6, the concepts of modularity and module dependencies have been proposed in a a slightly more clear way than CommonJS and AMD/RequireJS.

A module in ES6 is a Javascript file.The functions and variables in a module are not visible unless explicitly exported. This means that we can write code in your module and only exports values which should be accessed by other parts of your app. The goal of ES6 modules is to create a format that both users of CommonJS and AMD are happy with.

ES6 modules are declarative in nature. To export certain variable from a module you just use the `export` keyword. Similarly, to consume the exported variable in a different module we use `import`.

- `import` declarations bind a modules exports as local variables and may be renamed to avoid name collisions or conflicts.
- `export` declarations declare that a local-binding of a module is externally visible such that other modules  may read the exported child modules but can't export modules that have been defined elsewhere. We can also rename exports so their external name differs from their local names.

There are two kind of exports - named exports (several per module) and default exports (one per module)

Named exports can exports multiple things by prefixing their declarations with a keyword `export`:

```js
//libs.js

export const sqrt = Math.sqrt;
export function doMath(x) {
return x + x;
}

export function sayHello(name) {
return 'Hello ' + name;
}

//app.js
import {doMath, sayHello} from 'lib';

console.log(doMath(4)); // will log 8
console.lgo(sayHello('John')); // will log "Hello John"

```

If we want to import the whole module (all variables and functions) we can use the `*` sign, but we need to refer to its named exports via property notation:

```js
//app.js
import * as lib from 'lib';
console.log(lib.doMath(3)) // will log 6
console.log(lib.sayHello('stranger')) // will log "Hello stranger"
```

Another way to export the whole module is:

```js
//app.js
import 'lib' as library

console.log(library.doMath(5));
console.log(library.sayHello('Mark'));
```

If we want to export a single value from the module then we can default export. 

```js
// example.js
exports default function(num1, num2) {
    return num1 + num 2;
}
```

This module exports a function as the default. The `default` keyword indicates that this is a default export and the function doesn't require a name because the module itself represents a function. We can also specify an identifier as being default export using the renaming syntax, such as:

```js
// example.js
// same as previous example
function sum(num1, num2) {
    return num1 + num2;
}

export { sum as default };
```

The `as default` specifies that sum should be the default export of the module. This syntax is equivalent to the previous example. Importing the default value is done with the `import` keyword:

```js
import sum from 'example';

console.log(sum(1, 3)); // 4
```

Note that there are no curly braces used in this case. The local name `sum` is used to represent the function that the module exports. This syntax is cleaner and it will be dominant form of import on the web, allowing you to use already existing objects, such as:

```js
import $ from 'jquery';
```

ECMAScript 6 adds modules to the language as a way to package up and encapsulate functionality. Variables, functions, classes can all be exported and there is also one default export allowed per module. As we've seen, Harmony might come with some exciting new additions that will easy the development of module applications and handling concerns such as dependency management.
