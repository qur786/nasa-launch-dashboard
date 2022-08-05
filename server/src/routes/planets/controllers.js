const { planets } = require("../../models/planets");

function getAllPlanets(_req, res) {
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets
};
