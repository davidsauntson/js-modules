var Show = (function () {
'use strict';

function sayHello() {
    console.log('hello');
}

function sayBye() {
    console.log('tatty bye');
}

function init() {
    sayHello();
    sayBye();
}

return init;

}());
