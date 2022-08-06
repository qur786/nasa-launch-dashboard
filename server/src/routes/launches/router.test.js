const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should return 200", async () => {
    await request(app).get("/launches").expect(200);
  });
});

describe("Test POST /launches", () => {
  test("It should return 201 created", async () => {
    await request(app)
      .post("/launches")
      .send({
        mission: "Mark 1",
        target: "Kepler-442 b",
        rocket: "Jarvis 1",
        launchDate: new Date(1999, 2, 29)
      })
      .expect(201);
  });
});
