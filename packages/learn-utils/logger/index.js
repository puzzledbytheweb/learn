/**
 * Logger.
 */

//  Taken mostly from here https://github.com/strapi/strapi/blob/master/packages/strapi-utils/lib/logger.js

const pino = require("pino");
const _ = require("lodash");

const logLevels = ["fatal", "error", "warn", "info", "debug", "trace"];

function getLogLevel() {
  if (
    _.isString(process.env.LEARN_LOG_LEVEL) &&
    _.includes(logLevels, process.env.LEARN_LOG_LEVEL.toLowerCase())
  ) {
    return process.env.LEARN_LOG_LEVEL;
  }
  return "debug";
}

function getBool(envVar, defaultValue) {
  if (_.isBoolean(envVar)) return envVar;
  if (_.isString(envVar)) {
    if (envVar === "true") return true;
    if (envVar === "false") return false;
  }
  return defaultValue;
}

const loggerConfig = {
  level: getLogLevel(),
  timestamp: getBool(process.env.LEARN_LOG_TIMESTAMP, false),
  prettyPrint: getBool(process.env.LEARN_LOG_PRETTY_PRINT, true),
  forceColor: getBool(process.env.LEARN_LOG_FORCE_COLOR, true)
};

console.log(loggerConfig);

const logger = pino(loggerConfig);

module.exports = logger;
