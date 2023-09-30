const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');

const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};

describe('root page', () => {
  describe('GET request', () => {
    it('returns a 200 status', async () => {
      const response = await request(app).
      get('/');
      assert.equal(response.status, 200);
    });
    
    it('contains the correct title', async () => {
      const response = await request(app).
      get('/');
      assert.equal(parseTextFromHTML(response.text,"#page-title"), 'Messaging App')
    });
  });
});





// One use of TDD at the server level is to ensure that the HTTP status codes are returned as expected. Verifying status codes provide the most basic level of confidence that the server is functioning correctly. Having a test suite that includes status codes provides a quick check when implementing a new feature that we haven’t accidentally caused a request for valid routes to respond not authorized (401) or not found (404). (Full list of status codes at httpstatuses.com)
// ex: assert.equal(response.status, 200);