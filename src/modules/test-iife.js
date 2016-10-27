export var myModule = (function() {

    var module = {};

    var message;

    module.log = function privateFunction(msg) {
        message = msg;
        console.log(message);
    }

    return module;

})();