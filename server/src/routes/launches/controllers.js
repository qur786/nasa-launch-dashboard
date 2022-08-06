const { getAllLaunches } = require("../../models/launches");

function httpGetAllLaunches(_req, res) {
  return res.status(200).json(getAllLaunches());
}

module.exports = {
  httpGetAllLaunches
};
