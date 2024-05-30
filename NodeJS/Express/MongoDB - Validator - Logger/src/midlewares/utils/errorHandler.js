const winston = require("winston");
const createError = require("http-errors");
const logger = winston.createLogger({
  level: "error",
  format: winston.format.simple(),
  transports: [new winston.transports.File({ filename: "error.log" })],
});

function handleError(err, req, res, next) {
  if (err) {
    logger.error(`${req.url} ${req.method} ${err.message}`);
    res.status(400).json({ ok: false, err });
    return;
  }
  const unknowErro = createError(500, "Error Desconocido");
  logger.error(`Desconocido`);
  res.status(400).json({ ok: false, err: unknowErro });
}

module.exports = handleError;
