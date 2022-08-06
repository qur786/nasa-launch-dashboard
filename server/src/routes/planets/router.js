const { Router } = require("express");
const { httpGetAllPlanets } = require("./controllers");

const planetsRouter = Router();
planetsRouter.get("/planets", httpGetAllPlanets);

module.exports = { planetsRouter };
