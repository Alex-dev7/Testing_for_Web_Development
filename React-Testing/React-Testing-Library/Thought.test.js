import React from "react";
import { Thought } from "./Thought.js";


// 1 ----  The Render and Screen Objects

// Just like Jest, create-react-app includes React Testing Library by default. Since we initiated our project using create-react-app, we can immediately start utilizing React Testing Library without any additional setup.

// To start, we’ll take a look at two core objects, render and screen.

// render() is a function that we can use to virtually render components and make them available in our unit tests. Similar to ReactDOM.render(), RTL’s render() function takes in JSX as an argument.
// screen is a special object which can be thought of as a representation of the browser window. We can make sure that our virtually rendered components are available in the test by using the screen.debug() method, which prints out all the DOM contents.


// Import render and screen here
import {render, screen} from '@testing-library/react'
/// import jest-dom
import '@testing-library/jest-dom'

it("Displays the Thought component", () => {
  // Pass to Thought component as thought prop
  render(<Thought thought={thought}removeThought={() => {}} />)
  screen.debug()

  const thought = { text: "learn react testing library" };
  // Add your testing logic here
  
});


// 2 -----

it("Should have header text Passing Thoughts", () => {
    render(<App />);
    // Test App header text here
    const header = screen.getByText('Passing Thoughts')
    
    expect(header).toHaveTextContent('Passing Thoughts')
  });
  
  it("Should have button enabled", () => {
    render(<Thought thought={{ text: "Hello" }} removeThought={() => {}} />);
    // Test status of button here
    const button = screen.getByRole('button')

    expect(button).toBeEnabled()
    
  });


// 2 ----- Querying with RTL

// When we write tests for our applications, we often have to simulate user interaction with our application. This means we need to often work with the DOM elements to test how it reacts to user actions. To do so, we first have to query for and extract the DOM nodes from our virtually rendered components. Then, we can check and see if the extracted DOM nodes were rendered as expected. Fortunately for us, RTL has many built-in query methods that greatly simplify this process. In this exercise, we will cover the .getByX query methods.

// There are a number of .getByX query methods to choose from, and they are all accessible as methods on the screen object. Look at the example below, the .getByText() method is used to extract a DOM element with text that matches a specified string.


// Similarly, another method is .getByRole(), which allows us to extract a DOM node by its role type. Look at the example below; it shows us another way we can query for the <button> element using .getByRole().


//   const button = screen.getByRole('button'); 



// 3 --- Different Query Methods
// Now that we know how to perform queries with .getByX methods, it is time for us to move on to the other query method variants. RTL has another category of query methods called .queryByX.
