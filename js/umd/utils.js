(function (root, factory, name) {
    if (typeof define === "function" && define.amd) { // AMD
        define(factory);
    } else if (typeof module === "object" && module.exports) { // CommonJS
        module.exports = factory();
    } else {
        root[name] = factory()[name]; // Global
    }
})(globalThis, function () {
    return {
        consoleLog: function () {
            console.log("Hello World");
        }
    }
}, "consoleLog")
// Function called immediately after the module is defined.