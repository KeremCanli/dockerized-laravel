const cookieParser = require("cookie-parser");
const express = require("express");
const httpErrors = require("http-errors");
const morgan = require("morgan");
const path = require("path");

const indexRouter = require("./routes/index.js");
const usersRouter = require("./routes/users.js");

const application = express();

// View engine setup
application.set("views", path.join(__dirname, "views"));
application.set("view engine", "pug");

application.use(morgan("dev"));
application.use(express.json());
application.use(express.urlencoded({extended: false}));
application.use(cookieParser());
application.use(express.static(path.join(__dirname, "public")));

application.use("/", indexRouter);
application.use("/users", usersRouter);

// Catch 404 and forward to error handler
application.use((request, response, next) => {
    next(httpErrors(404));
});

// Error handler
application.use((error, request, response) => {
    // Set locals, only providing error in development.
    response.locals.message = error.message;
    response.locals.error = request.application.get("env") === "development" ? error : {};
    // Render the error page.
    response.status(error.status || 500);
    response.render("error.pug");
});

module.exports = application;