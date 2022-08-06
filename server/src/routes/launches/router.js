const { Router } = require("express");
const { httpGetAllLaunches, httpAddNewLaunch } = require("./controllers");

const launchesRouter = Router();
launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);

module.exports = { launchesRouter };
