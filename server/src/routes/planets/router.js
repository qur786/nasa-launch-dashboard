const { Router } = require("express");
const { getAllPlanets } = require("./controllers");

const planetsRouter = Router();
planetsRouter.get("/planets", getAllPlanets);

module.exports = { planetsRouter };
