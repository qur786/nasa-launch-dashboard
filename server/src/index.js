const http = require("http");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets");

const port = process.env.PORT || 9000;

async function startServer() {
    await loadPlanetsData();
    const server = http.createServer(app);
    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    })
}

startServer();