const { app, BrowserWindow } = require('electron');
const { exec, spawn } = require('child_process');
const os = require('os');
const user = os.userInfo().username;
let mainWindow;
let outputCommand;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        minWidth: 400,
        minHeight: 400,
    });

    exec(__dirname + "/scripts/checkUser.so", (error, stdout, stderr) => {
        if(error) outputCommand = error;
        if(stdout) outputCommand = stdout;
        if(stderr) outputCommand = stderr;
    });

    setTimeout(() => {
        switch(outputCommand) {
            case "root": mainWindow.loadFile(__dirname + "/pages/index.html");
            break;
            case `${user}`: mainWindow.loadFile(__dirname + "/pages/errors/invalidUserError.html");
            break
            default: {
                spawn("echo '" + outputCommand + "' > " + __dirname + "/logs/outputCommandErrors.log");
                mainWindow.loadFile(__dirname + "/pages/errors/internalError.html");
            }
            break;
        }
        mainWindow.setMenu(null);
        
    }, 2000);
})