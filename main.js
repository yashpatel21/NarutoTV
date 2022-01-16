const { app, BrowserWindow } = require('electron');

// app.disableHardwareAcceleration();

function createWindow() {
	const mainWindow = new BrowserWindow({
		autoHideMenuBar: true,
		kiosk: true,
		alwaysOnTop: true,
		webPreferences: {
			webSecurity: false,
		},
	});

	// mainWindow.loadURL('http://localhost:3000');
	mainWindow.loadFile('./src/index.html');
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});
