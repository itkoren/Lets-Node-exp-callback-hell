var async = require("async");

var factorial = function(n, callback) {
    var fact = 1;
    var index = 1;

    async.whilst(
        function() {
            return index <= n;
        },
        function(next) {
            setImmediate(function() {
                console.log("step" + index);
                fact = fact * index;
                ++index;
                next();
            });
        },
        function(err) {
            setImmediate(function() {
                callback(err, fact);
            });
        }
    );
};

setTimeout(function(){
    console.log("TIMEOUT 0");
}, 0);

factorial(50, function(err, result) {
    console.log("COMPLETED: " + result);
});