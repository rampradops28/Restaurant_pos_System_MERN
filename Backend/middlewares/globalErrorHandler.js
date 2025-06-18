const config = require("../config/config");

 // Global middleware to handle errors and send formatted JSON responses

const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        status: statusCode,
        message: err.message,
        errorStack: config.nodeEnv === "development" ? err.stack : ""
    })
}

module.exports = globalErrorHandler;