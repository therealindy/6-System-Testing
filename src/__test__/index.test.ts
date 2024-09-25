// import request from "supertest";
import app from "../app";
import express from 'express';
import request from "supertest";

describe("Sanity test", () => {
  test("1 should equal 1", () => {
    expect(1).toBe(1);
  });

});

describe('GET/user', () => {
  it('Profile', async () => {
    const response = await request(app)
      .get('/user')
      .expect(200)
      .expect('Content-Type',/json/);

    expect(response.body).toEqual({
      id: 303,
      name: 'Kawintida',
      lastname: 'Phoongam',
      age: 19
    });
  });
});