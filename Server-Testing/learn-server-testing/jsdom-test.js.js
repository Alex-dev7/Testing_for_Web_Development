const {assert} = require('chai');
const {jsdom} = require('jsdom');

// We can use the jsdom library to improve this type of assertion. It allows us to select elements of the DOM and check relationships and content. To increase the readability of our tests, we abstracted the jsdom functionality into a custom function, parseTextFromHTML:

const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};

describe('HTML tests', () => {
  describe('#bar', () => {
    it('should include the string "Hello"', () => {
      // setup
      const foo = '<html><div id="bar">Hello</div><div id="buzz">Hello</div><html>';
      //asserts
      assert.include(parseTextFromHTML(foo, '#bar'), 'Hello');
    });
  });
});