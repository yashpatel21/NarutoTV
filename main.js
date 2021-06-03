const { app, BrowserWindow } = require('electron');

app.disableHardwareAcceleration();

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		fullscreen: true,
		autoHideMenuBar: true,
	});

	mainWindow.loadURL('http://localhost:3000');
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
