const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const { planetsRouter } = require("./routes/planets/router");
const { launchesRouter } = require("./routes/launches/router");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
app.use(express.static(path.join(__dirname, "../client-build")));

module.exports = app;
