const { app, BrowserWindow } = require('electron')


function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
        nodeIntegration: false
        }
    })

    // and load the index.html of the app.
    win.loadURL('http://sheltered-tundra-09814.herokuapp.com/',
                {userAgent: 'Chrome', webPreferences: {javascript: true}})
}

app.whenReady().then(createWindow)
