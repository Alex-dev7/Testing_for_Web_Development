const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

describe('root page', () => {
  describe('GET request', () => {
    it('returns a 200 status', async () => {
      const response = await request(app).
      get('/');
      assert.equal(response.status, 200)
    });
  });
});





// One use of TDD at the server level is to ensure that the HTTP status codes are returned as expected. Verifying status codes provide the most basic level of confidence that the server is functioning correctly. Having a test suite that includes status codes provides a quick check when implementing a new feature that we haven’t accidentally caused a request for valid routes to respond not authorized (401) or not found (404). (Full list of status codes at httpstatuses.com)
// ex: assert.equal(response.status, 200);