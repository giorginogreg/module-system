import {printName} from "./utils.js"

function consoleLog() {
    printName();
}

window.consoleLog = consoleLog; // Valid for client side / browser, not valid for NodeJS

//consoleLog();