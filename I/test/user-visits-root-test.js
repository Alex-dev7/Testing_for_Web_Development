const {assert} = require('chai');


// we can use browser.url() to simulate a user visiting the home page of our application, which is the first behavior we want to test.

describe('User visits root', () => {
  describe('without existing messages', () => {
    it("starts blank", () => {
        browser.url('/') // The .url method navigates to the URL that is passed to it as an argument.
        assert.equal(browser.getText('#messages'),'');
    })
  });

  describe('posting a message', () => {
    it('saves the message with the author information', () => {
        const message = 'feature tests often hit every level of the TDD Testing Pyramid'
        const author = 'username'

        browser.url('/')
        // We will use .setValue() to mimic a user entering the title and poem into the corresponding HTML input elements at the root of our web app.
        // The first argument passed to .setValue() is the CSS selector that references an HTML element, and the second argument is the value you want to assign that element.
        browser.setValue('input[id=author]', author)
        browser.setValue('textarea[id=message]', message)
        // To complete the exercise phase of our test we would use the .click method to mimic a user clicking on a submit button.
        browser.click('input[type=submit]')
 
    });
  });
});