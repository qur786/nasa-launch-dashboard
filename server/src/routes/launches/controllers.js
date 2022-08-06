const { getAllLaunches, addNewLaunch } = require("../../models/launches");

function httpGetAllLaunches(_req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  let launch = req.body;
  launch = {
    ...launch,
    launchDate: new Date(launch.launchDate)
  };
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch
};
