const {assert} = require('chai'); //Chai Assertion Library 


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
        // Setup
        const message = 'feature tests often hit every level of the TDD Testing Pyramid'
        const author = 'username'

        // Exercise
        browser.url('/')
        // We will use .setValue() to mimic a user entering the title and poem into the corresponding HTML input elements at the root of our web app.
        // The first argument passed to .setValue() is the CSS selector that references an HTML element, and the second argument is the value you want to assign that element.
        browser.setValue('input[id=author]', author)
        browser.setValue('textarea[id=message]', message)
        // To complete the exercise phase of our test we would use the .click method to mimic a user clicking on a submit button.
        browser.click('input[type=submit]')

        // Verification
        assert.include(browser.getText('#messages'), author)
        assert.include(browser.getText('#messages'), message)
 
    });
  });
});


// ------ what I've learned:

// When developing a new feature and practicing outside-in development, feature tests are where we’ll typically start.

// Feature tests often incorporate every layer of the application and — using WebDriverI/O and Mocha — exercise features in the same way that a human user would. They’re a good tool for reproducing end-user behavior.

// WebDriverI/O is a Node package that interacts with a “headless” instance of PhantomJS.

// Feedback from feature tests is usually in terms of HTML (i.e. that text or button that you said would be on the page isn’t on the page).

// Because feature tests typically hit every layer of a developer’s stack, they are slower than tests at lower layers, and errors thrown in feature tests can be difficult to interpret and provide little guidance on what the developer can do to resolve them.

// Their value, however, is in developer confidence that the software functions as expected.