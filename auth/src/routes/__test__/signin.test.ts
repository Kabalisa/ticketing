import request from "supertest";
import { app } from "../../app";

it("fails with email that do not exist", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test1@email.com",
      password: "password",
    })
    .expect(400);
});

it("fails with incorrect password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test1@email.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test1@email.com",
      password: "lknkkjbjhbj",
    })
    .expect(400);
});

it("responds with a cookie when given the right credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test1@email.com",
      password: "password",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test1@email.com",
      password: "password",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
