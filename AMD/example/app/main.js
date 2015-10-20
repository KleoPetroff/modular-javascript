/*
 * The main module will require the app module, which will require the alerter module.
 * The end result is when the button, created in the app module is clicked, the alerter
 * module will be required and alerter.js will be lazy loaded (load when required) with an
 * alert message.
 */
require(['app'], function(app) {

});