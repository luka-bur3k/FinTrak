// src/main.ts
import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'), // optional
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // mainWindow.loadURL('http://localhost:3000'); // for dev server
  // Or for production build:
  console.log(`DIRNAME: ${__dirname}`)
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
