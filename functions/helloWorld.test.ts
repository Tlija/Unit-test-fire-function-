import * as functions from 'firebase-functions';
import * as test from 'firebase-functions-test';

const testContext = test();

const helloWorld = require('./index').helloWorld;

test('helloWorld should return "Hello from Firebase!"', async () => {
  const request = testContext.https(); // Simulate an HTTP request
  const response = testContext.response();

  await helloWorld(request, response);

  expect(response.send).toHaveBeenCalledWith('Hello from Firebase!');
});
