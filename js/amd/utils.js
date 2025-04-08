define(
//     [
//     'require',
//     'dependency',
//     // dependencies on which this module depends
// ], 
function (require,factory) {
    //factory is the function that will be called when the module is defined
    //it will receive the dependencies as arguments
    //it should return the exports for the module
    return {
        consoleLog: function () {
            console.log("Hello World");
        }
    }
});
