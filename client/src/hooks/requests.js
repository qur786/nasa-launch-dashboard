const API_URL = "http://localhost:9000";

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const launches = await response.json();
  return launches.sort((a, b) => a.flightNumber - b.flightNumber);
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  let response = {
    ok: false
  };
  try {
    response = await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch)
    });
  } catch {}
  return response;
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  let response = {
    ok: false
  };

  try {
    response = await fetch(`${API_URL}/launches/${id}`, {
      method: "delete"
    });
  } catch {}

  return response;
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
