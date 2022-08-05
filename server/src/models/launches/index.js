const launches = new Map();

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

module.exports = {
  launches
};
