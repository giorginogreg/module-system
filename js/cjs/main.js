const {printName} = require("./utils.js")
//or const utils = require("./utils.js")
function consoleLog() {
    printName();
    //utils.printName();
}

//window.consoleLog = consoleLog; // Valid for client side / browser.

consoleLog();