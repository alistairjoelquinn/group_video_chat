const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

const routes = require('./routes');
const { developmentErrors, productionErrors } = require('./handlers/errorHandlers');

app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use('/', routes);

if (app.get('env') === 'development') {
    app.use(developmentErrors);
} else {
    app.use(productionErrors);
}

module.exports = app;