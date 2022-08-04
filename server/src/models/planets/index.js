const { createReadStream } = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const habitalPlanets = [];

function isHabitablePlanet(planet) {
	return planet["koi_disposition"] === "CONFIRMED" 
	&& planet["koi_insol"] > 0.36 
	&& planet["koi_insol"] < 1.1 
	&& planet["koi_prad"] < 1.6;
}

function loadPlanetsData() {
	return new Promise((res, rej) => {
		createReadStream(path.join(__dirname, "../../data/kepler_data.csv"))
		.pipe(parse({
			comment: "#",
			columns: true
		}))
		.on("data", (data) => {
			if (isHabitablePlanet(data)) {
				habitalPlanets.push(data);
			}
		})
		.on("error", (error) => {
			console.log(error);
			rej(err);
		})
		.on("close", () => {
			console.log("Process completed");
			res();
		});
	});
}

module.exports = {
    planets: habitalPlanets,
	loadPlanetsData
}