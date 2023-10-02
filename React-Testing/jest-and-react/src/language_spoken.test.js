import { 
    capitalize, 
    getAlpha2Code, 
    countryExtractor,
    countryListLookup, 
    getResponse 
  } from './language_spoken.js';

  // import the actual module
import httpRequest from './http-request.js'
// then, tell Jest to mock the implementation!
jest.mock('./utils/http-request.js')


  it("converts array of country data objects to array of countries", ()=>{
      //arrange
      const inputObject = [
        {name: "Argentina", capital: "Buenos Aires"},
        {name: "Belize", capital: "Belmopan"},
        {name: "Bolivia", capital: "Sucre"}
        ]
      const expectedValue = ["Argentina","Belize","Bolivia"]
      
      //act
      const actualValue = countryExtractor(inputObject)
      
      //assert
      expect(actualValue).toEqual(expectedValue);
      expect(actualValue[0]).toBe('Argentina');
      expect(actualValue).toContain('Belize')
      expect(actualValue[2] === "Bolivia").toBeTruthy()
      expect(actualValue[3]).not.toBeDefined()
  })


    // Notice that we need to pass `done` as an argument to the `it()` function to signal that the test will perform an async operation.
    it("correctly fetches a list of countries", (done) => {
        const inputLanguageCode = "es";
        const expectedValue = "Argentina";
      
        countryListLookup(inputLanguageCode, (result) => {
            try {
                expect(result).toBeDefined();
                done()
              } catch(error) {
                done(error)
              }
        });
      });


      // handle promises 
      it("correctly fetches a list of countries", async  () => {

        const inputLanguageCode = "es";
        const expectedValue ="Argentina";
      
        const actualValue = await countryListLookup(inputLanguageCode);
      
        expect(actualValue).toContain(expectedValue);       
      });
      

//   Let’s go over the matchers used in this example:

// .toBeDefined() is used to verify that a variable is not undefined. This is often the first thing checked.
// .toEqual() is used to perform deep equality checks between objects.
// .toBe() is similar to .toEqual() but is used to compare primitive values.
// .toBeTruthy() is used to verify whether a value is truthy or not.
// .not is used before another matcher to verify that the opposite result is true
// .toContain() is used when we want to verify that an item is in an array. In this case, since the .not matcher is used, we are verifying that "Ice Cream" is NOT in the array.




//  !!!

//  ----   When should I use `done()` and `async/await`?
//  ---- Although both are functionally similar, their uses can help make your test code more readable. You should use done() for asynchronous code that uses callbacks, while async/await is best suited for code that returns Promises. Choosing the appropriate method can help make your code more readable and easier to understand. ---- //





// ----       Mocking with Jest 
// Over the past few exercises, we have been analyzing the findRecipe() function, which makes a REST API call to fetch the recipe data. Testing with the real REST API is not ideal for a few reasons:

// We aren’t concerned about whether the third-party API works. Instead, we only care about whether or not the function that performs the API call works.
// Incorporating REST API calls into our tests can create fragile tests that may fail simply due to network issues.
// If we were interacting with a production-grade database, we could accidentally alter official data.
// A safer and more efficient way to write our tests would be to create a mock function that bypasses the API call and returns values that we control instead. A mock function is a clone implementation of the code we are testing. It behaves the same way, but it is easier to control and test. We can use the mock function to test our code in isolation without worrying about the actual implementation details.

// Jest provides us with a way to mock functions and even entire modules to do just that!

// Creating the mock function and then replacing the real function with the mocked one requires two separate steps. For the sake of clarity, we will break down this process over this exercise and the next. First, let’s go over the steps to create a mocked function.

// 1. First, we need to create a directory labeled __mocks__/ in the same directory as the module that we want to mock. This is a special directory that Jest will know to look for when mocking the specified module.
// 2. Next, inside the directory, we create a file with the same name as the module that will be mocked.
// 3. Then, we create a module with the functionality that we want. Functions that we want to mock can be created using jest.fn(), the function provided by the Jest library for creating mock functions.
// 4. Lastly, we export the module.

// file: utils/__mocks__/api-request.js
// Create a Jest mock function with the same name as the function we're mocking
const apiRequest = jest.fn(() => {
    //Return a resolved Promise with a mock response object
    return Promise.resolve({ 
      status: "", 
      data: {} 
    });
  });
  
  export default apiRequest;


//   Let’s break down this example:

// Since we are mocking the utils/api-request.js file, we created a file called utils/__mocks__/api-request.js.
// Inside, we declared an apiRequest() function that is assigned a value of jest.fn().
// By passing a callback function to jest.fn(), we can define the behavior of the mocked function. In this case, we have the mocked function return a custom Promise that matches the structure expected by our application (an object with status and data properties).
// Lastly, we export apiRequest as the default export.





it("correctly fetches a list of countries",  async () => {
    //arrange
    const inputLanguageCode = "jest";
    const expectedValue ="CodeLand";
    const resolvedValue = {
      status: 'MOCK',
      data: [
        { name: "CodeLand", capital: "Codecademy" },
      ]
    };
    // TODO: Mock the first resolved value of httpRequest
    httpRequest.mockResolvedValueOnce(resolvedValue);
  
    //act
    const actualValue = await countryListLookup(inputLanguageCode);
    //assert
    expect(actualValue).toContain(expectedValue);
  });

//   Our test now verifies how countryListLookup() handles and processes the response data without relying on an external API call.