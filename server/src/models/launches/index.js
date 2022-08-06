const launches = new Map();

let latestFlightNumber = 1;

const launch = {
  flightNumber: 1,
  mission: "Mark 1",
  destination: "Kepler-442 b",
  customer: ["NASA"],
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
      customer: ["NASA"],
      upcoming: true,
      success: true
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch
};
