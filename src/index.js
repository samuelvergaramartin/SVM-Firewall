const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');
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
        outputCommand = stdout;
    });

    setTimeout(() => {
        switch(outputCommand) {
            case "root": mainWindow.loadFile(__dirname + "/pages/index.html");
            break;
            case user: mainWindow.loadFile(__dirname + "/pages/error/invalidUserError.html");
            break
            default: {
                
            }
            break;
        }
        mainWindow.setMenu(null);
        
    }, 1000);
})