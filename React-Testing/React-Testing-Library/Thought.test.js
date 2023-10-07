import React from "react";
import { Thought } from "./Thought.js";


// The Render and Screen Objects
// Just like Jest, create-react-app includes React Testing Library by default. Since we initiated our project using create-react-app, we can immediately start utilizing React Testing Library without any additional setup.

// To start, we’ll take a look at two core objects, render and screen.

// render() is a function that we can use to virtually render components and make them available in our unit tests. Similar to ReactDOM.render(), RTL’s render() function takes in JSX as an argument.
// screen is a special object which can be thought of as a representation of the browser window. We can make sure that our virtually rendered components are available in the test by using the screen.debug() method, which prints out all the DOM contents.


// Import render and screen here
import {render, screen} from '@testing-library/react'

it("Displays the Thought component", () => {
  // Pass to Thought component as thought prop
  render(<Thought thought={thought}removeThought={() => {}} />)
  screen.debug()

  const thought = { text: "learn react testing library" };
  // Add your testing logic here
  
});