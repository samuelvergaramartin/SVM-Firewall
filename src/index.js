const { app, BrowserWindow } = require('electron');
let mainWindow;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        minWidth: 400,
        minHeight: 400,
    });

    mainWindow.loadFile(__dirname + "/pages/index.html");
    mainWindow.setMenu(null);
})