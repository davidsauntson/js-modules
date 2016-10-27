var Show = (function () {
'use strict';

function sayHello() {
    console.log('hello');
}

function saySomething(msg) {
    console.log(msg);
}

function sayBye() {
    console.log('tatty bye');
}

function init() {
    sayHello();
    saySomething('this show is the best');
    sayBye();
}

return init;

}());
