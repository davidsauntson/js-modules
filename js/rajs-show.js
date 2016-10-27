var Show = (function () {
'use strict';

function sayHello() {
    console.log('hello');
}

function shutup() {
    console.log('shutting up, sir');
}

function sayBye() {
    console.log('tatty bye');
}

function init() {
    sayHello();
    shutup();
    sayBye();
}

return init;

}());
