const { getAllPlanets } = require("../../models/planets");

function httpGetAllPlanets(_req, res) {
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets
};
