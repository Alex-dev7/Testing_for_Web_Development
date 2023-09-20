const {assert} = require('chai');

describe('User visits project root', () => {
    describe('posting a quote', () => {
      it('saves quote and metadata submitted by user', () => {
        // Setup 
        const quote = 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.'
        const attribuited = 'Marianne Williamson'
        const source = 'A Return to Love: Reflections on the Principles of A Course in Miracles.'
  
        // Exercise
        browser.url('/')
        browser.setValue('textarea[id=quote]', quote)
        browser.setValue('input[id=attribuited]', attribuited)
        browser.setValue('input[id=source]', source)
        browser.click('input[type=submit]')

            // Verification
      assert.include(browser.getText("#quotes"), quote)
      assert.include(browser.getText("#quotes"), attribuited)
      assert.include(browser.getText("#quotes"), source)
      })
  
    })
  })