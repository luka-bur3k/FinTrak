// src/main.ts
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import logger from './logger';
import dotenv from 'dotenv';

dotenv.config();

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  logger.logi(`DIRNAME: ${__dirname}`);
  logger.logi(`MODE: ${process.env.FINTRAK_MODE}`);
  if (process.env.FINTRAK_MODE == "development") {
    mainWindow.loadURL('http://localhost:3000'); // for dev server
  } else if (process.env.FINTRAK_MODE == "production") {
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
  }
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
