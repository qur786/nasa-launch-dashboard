const { Router } = require("express");
const { getAllLaunches } = require("./controllers");

const launchesRouter = Router();
launchesRouter.get("/launches", getAllLaunches);

module.exports = launchesRouter;
