const launches = new Map();

const launch = {
  flightNumber: 1,
  mission: "Mark 1",
  destination: "Kepler 1",
  customer: ["NASA"],
  rocket: "Jarvis 1",
  launchDate: new Date(29, 2, 1999),
  upcoming: true,
  success: true
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches
};
