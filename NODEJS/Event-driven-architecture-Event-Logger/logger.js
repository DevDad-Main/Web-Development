const fs = require("fs");
const os = require("os");

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "./eventlog.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}\n`;
  fs.appendFileSync(logFile, logMessage);
};

//NOTE: WE have added a listenter to the event 'message' so when we can logger.log() then it will listen and execute the code
logger.on("message", logFile);

setInterval(() => {
  //NOTE: Getting our memory usage from the os module and then * 100 to get a percentage
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage is ${memoryUsage.toFixed(2)}`);
}, 3000);
