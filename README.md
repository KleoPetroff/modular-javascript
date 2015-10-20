# Modern JavaScript Patterns

In the world of scalable JavaScript, when we say modular, we often mean it's composed of a set of highly decoupled (separated) pieces of functionality stored in modules.

Currently Javascript doesn't provide clean and organized way to import such modules so developers are left with variants like object literal patterns or module pattern. With many of these, module scripts are string together in the DOM with namespaces being described by single objects. There is also no clean way to handle dependency management without third party tools. This omission makes it difficult to apply practices like:

- Hiding implementation design behind interfaces
- Splitting large projects (and functionality) into multiple files
- Reusing functionality from libraries and other code bases

Ignoring these problem isn't an option. Native solutions to this problems will come in ES Harmony(the next version of JavaScript) and the best thing is that we can start doing it today.

We are doing to look at three ways to write modular JavaScript:

- AMD
- CommonJS
- ES Harmony