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

  test("It should catch missing value error", async () => {
    const response = await request(app).post("/launches").send({}).expect(400);
    expect(response.body).toStrictEqual({
      error: "Missing required attributes"
    });
  });

  test("It should catch invalid date error", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "Mark 1",
        target: "Kepler-442 b",
        rocket: "Jarvis 1",
        launchDate: "invalid date"
      })
      .expect(400);
    expect(response.body).toStrictEqual({
      error: "Launch date is not valid"
    });
  });
});

describe("Test DELETE /launch/:id", () => {
  test("It should return 200", async () => {
    await request(app).delete("/launches/1").expect(200);
  });
});
