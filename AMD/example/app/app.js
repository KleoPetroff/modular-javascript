/*
 * Define a new module and call a local require with function(require).
 */

define(function(require) {

    // Create a new button to lazy load the alerter module on click
    var button = document.createElement('button');

    // The onclick event, on which the local require gets the alerter module
    button.onclick = function() {

        // get alerter module as dependency and create a factory function
        require(['alerter'], function(alerter) {

            // the factory function call the alerter anonymous function
            alerter('Hello World');
        });
    };

    // create the button text and append the whole button the body tag
    button.textContent = 'Click to lazy load the loader.js';
    document.body.appendChild(button);
});