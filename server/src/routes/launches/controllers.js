const { launches } = require("../../models/launches");

function getAllLaunches(_req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

module.exports = {
  getAllLaunches
};
