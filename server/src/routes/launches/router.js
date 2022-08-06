const { Router } = require("express");
const { httpGetAllLaunches } = require("./controllers");

const launchesRouter = Router();
launchesRouter.get("/launches", httpGetAllLaunches);

module.exports = { launchesRouter };
