import CurrencyComparison from './currency_comparison';

// Task 10: Import and mock fetchData

const testSalary = new CurrencyComparison(50000)
    
// Task 1: Create a test for testSalary.currencyConversion below
it('Gets conversion rate for currency', () => {
  // arrange
  const currencyCode1 = 'CAD'
  const expectedValue1 = 1.21
  const currencyCode2 = 'EUR'
  const expectedValue2 = .82
  const rates = {
    "MXN": 19.9021,
    "CAD": 1.2121, 
    "EUR": .8235  
  }

  // act
  const actualValue1 = testSalary.currencyConversion(rates, currencyCode1)
  const actualValue2 = testSalary.currencyConversion(rates, currencyCode2)

  // assert
  expect()

})

// Task 5: Create a test for testSalary.hourlyPayUSD below



// Task 6: Complete this test!
it("Respond with different salaries based on currency", () => {
  //arrange
  const currency = "CAD"
  const exchangeRate = 1.21
  const expectedValue = {
    USD: 25,
    CAD: 20.66,
    salary: 50000,
  }

  //act
  testSalary.response(currency, exchangeRate, (result) => {
    //assert
    
  })
})

// Task 10 & 11: Complete this test!
it("Receives current currency exchange data", async ()=>{
  //arrange
  const mockResponse = {
    status : "Mock",
    data: {
      "base": "USD",
      "rates": {
        "CCD": 50,
      },
      "date": "2021-05-17"
    }
  }
  const expectedValue = [{"CCD": 50}, "Mock"];

  // Mock the resolved value of fetchData

  
  //act
  const actualValue = await testSalary.fetchCurrentExchange() 
  
  //assert
 
})