const { getAllLaunches, addNewLaunch } = require("../../models/launches");

function httpGetAllLaunches(_req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  let launch = req.body;
  let response = launch;
  let status = 201;
  const { launchDate, mission, destination, rocket } = launch;
  if (!launchDate || !mission || !destination || !rocket) {
    response = {
      error: "Missing required attributes"
    };
    status = 400;
  } else if (isNaN(launchDate) === true) {
    response = {
      error: "Launch date is not valid"
    };
    status = 400;
  } else {
    launch = {
      ...launch,
      launchDate: new Date(launchDate)
    };
    response = launch;
  }
  addNewLaunch(launch);
  return res.status(status).json(response);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch
};
