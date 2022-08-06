const { Router } = require("express");
const { httpGetAllLaunches, httpAddNewLaunch } = require("./controllers");

const launchesRouter = Router();
launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("/launches", httpAddNewLaunch);

module.exports = { launchesRouter };
