// Default
import fs from "fs";

// Packages

// Local

export enum LogType {
  INFO,
  ERROR,
  REQ,
  WARNING,
  OTHER,
  DEBUG,
}

// Create a write stream (append mode)
const logStream = fs.createWriteStream("output.log", { flags: "w" });

// Redirect console.log and console.error
console.log = (...args) => {
  logStream.write(args.join(" ") + "\n");
  process.stdout.write(args.join(" ") + "\n"); // Keep logging to console
};

console.error = (...args) => {
  logStream.write("[ERROR] " + args.join(" ") + "\n");
  process.stderr.write(args.join(" ") + "\n"); // Keep error output
};

class Logger {
  static currentTimestamp = (): string => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-GB", { hour12: false });
    return timeString;
  };

  private static logTypePrefix(type: LogType): string {
    switch (type) {
      case LogType.INFO:
        return ".";
      case LogType.ERROR:
        return "!";
      case LogType.REQ:
        return "-->";
      case LogType.WARNING:
        return "#";
      case LogType.OTHER:
        return "*";
      case LogType.DEBUG:
        return "-";
      default:
        break;
    }
    return "";
  }

  log(msg: string, type: LogType, optional: any[] = []) {
    console.log(
      `[${Logger.logTypePrefix(type)}] ${Logger.currentTimestamp()} | ${msg}`,
      optional
    );
  }

  logi(msg: string) {
    this.log(msg, LogType.INFO);
  }

  loge(msg: string, optional: any[] = []) {
    this.log(msg, LogType.ERROR, optional);
  }

  logw(msg: string) {
    this.log(msg, LogType.WARNING);
  }

  logd(msg: string) {
    this.log(msg, LogType.DEBUG);
  }
}

export default new Logger();
