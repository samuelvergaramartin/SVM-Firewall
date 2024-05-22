const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');
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
        if(outputCommand != "root") console.log("Error! Solo root puede ejecutar este programa!");

        mainWindow.loadFile(__dirname + "/pages/index.html");
        mainWindow.setMenu(null);
    }, 1000);
})