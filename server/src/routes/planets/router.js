const { Router } = require("express");
const { httpGetAllPlanets } = require("./controllers");

const planetsRouter = Router();
planetsRouter.get("/", httpGetAllPlanets);

module.exports = { planetsRouter };
