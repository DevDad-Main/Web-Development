import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;

//NOTE: Custom format for console logging with colours
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  }),
);

//NOTE: Create a Winston Logger
const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  //NOTE: How to use the transported information, console log it or put it into its own file or even MongoDB.
  transports: [
    //NOTE: Overwrites the console.log
    new transports.Console({
      format: consoleLogFormat,
    }),
    //NOTE: This is for putting log into file, persisting our data
    new transports.File({ filename: "app.log" }),
  ],
});

export default logger;
