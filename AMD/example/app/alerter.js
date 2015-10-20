/*
 * This is the alerter module. We define it with the define() method
 * which will create a function that returns an alert message
 */

define(function(){

    // the factory function is an anonymous function
    // that returns an alert with a custom message
    return function (message) {
        alert(message)
    }
});