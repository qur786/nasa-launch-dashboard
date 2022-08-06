const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should return 200", async () => {
    await request(app).get("/launches").expect(200);
  });
});
