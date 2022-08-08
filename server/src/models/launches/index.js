const launches = new Map();

let latestFlightNumber = 1;

const launch = {
  flightNumber: 1,
  mission: "Mark 1",
  target: "Kepler-442 b",
  customers: ["NASA"],
  rocket: "Jarvis 1",
  launchDate: new Date(1999, 2, 29),
  upcoming: true,
  success: true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber += 1;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ["NASA"],
      upcoming: true,
      success: true
    })
  );
}

function isLaunchExists(launchID) {
  return launches.has(launchID);
}

function abortLaunch(launchID) {
  let abortedLaunch = launches.get(launchID);
  abortedLaunch.upcoming = false;
  abortedLaunch.success = false;
  return abortedLaunch;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  isLaunchExists,
  abortLaunch
};
