const {
  getAllLaunches,
  addNewLaunch,
  isLaunchExists,
  abortLaunch
} = require("../../models/launches");

function httpGetAllLaunches(_req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  let response;
  let status;
  const { launchDate, mission, target, rocket } = req.body; // req.body ==> launch
  if (!launchDate || !mission || !target || !rocket) {
    response = {
      error: "Missing required attributes"
    };
    status = 400;
  } else if (isNaN(new Date(launchDate))) {
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
    status = 201;
  }
  addNewLaunch(launch);
  return res.status(status).json(response);
}

function httpAbortLaunch(req, res) {
  let status;
  let response;
  const launchID = Number(req.params.id);
  if (!isLaunchExists(launchID)) {
    response = {
      error: "Launch does not found"
    };
    status = 404;
  } else {
    response = abortLaunch(launchID);
    status = 200;
  }
  return res.status(status).json(response);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
};
