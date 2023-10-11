import React from "react";
import { Thought } from "./Thought.js";
import { AddThoughtForm } from "./AddThoughtForm.js";
import "regenerator-runtime/runtime";
// 1 ----  The Render and Screen Objects

// Just like Jest, create-react-app includes React Testing Library by default. Since we initiated our project using create-react-app, we can immediately start utilizing React Testing Library without any additional setup.

// To start, we’ll take a look at two core objects, render and screen.

// render() is a function that we can use to virtually render components and make them available in our unit tests. Similar to ReactDOM.render(), RTL’s render() function takes in JSX as an argument.
// screen is a special object which can be thought of as a representation of the browser window. We can make sure that our virtually rendered components are available in the test by using the screen.debug() method, which prints out all the DOM contents.


// Import render and screen here
import {waitFor, render, screen} from '@testing-library/react'
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


// 4 ---- Querying Asynchronous Components
// Now, let’s discuss querying for asynchronous elements. Imagine we’re testing an application comprising components that perform asynchronous operations, such as fetching data from an API, triggering animations, or executing delayed rendering. How would we write tests that will wait for these elements to appear?

// We can use .findByX methods. The .findByX methods are used to query for asynchronous elements, which will eventually appear in the DOM. The .findByX methods work by returning a Promise, which resolves when the queried element renders in the DOM. As such, the async/await keywords can be used to enable asynchronous logic.

// Let’s look back at the program again. Recall that the header has a 500ms delay. We want to confirm that the header will display the text 'Goodbye' after the button is clicked.

// Changes header text after interval of 500ms
const handleClick = () => {
    setTimeout(() => {
        setText('Goodbye!');
    }, 500);
  };

//   We can write our test like this. This example uses the userEvent library, which will be covered in depth in the next exercise, to simulate clicking on the button.

// import App from './components/App';
// import { render, screen } from '@testing-library/react';

it('should show text content as Goodbye', async () => {
  // Render App
  render(<App />);
  // Extract button node 
  const button = screen.getByRole('button');
  // click button
  userEvent.click(button);
  // Wait for the text 'Goodbye!' to appear
  const header = await screen.findByText('Goodbye!');
  // Assert header to exist in the DOM
  expect(header).toBeInTheDocument();
});


// In the example above, we use .findByText() since the 'Goodbye!' message does not render immediately. This is because our handleClick() function changes the text after an interval of 500ms. So, we have to wait a bit before the new text is rendered in the DOM.

// Observe the async and await keywords in the example above. Remember that findBy methods return a Promise, and thus, the callback function that carries out the unit test must be identified as async while the screen.findByText() method must be preceded by await.


it("Should show new thought to be present", async () => {
    render(<App />);
  
    // The code below mimics a user posting a thought with text 'Oreos are delicious'
    const addThoughtInput = screen.getByRole("input");
    const addButton = screen.getByRole("submit");
    userEvent.type(addThoughtInput, "Oreos are delicious");
    userEvent.click(addButton);
  
    // Modify testing logic here
    const thought = await screen.findByText("Oreos are delicious");
    expect(thought).toBeInTheDocument();
  });



//  5 ---- Mimicking User Interactions
// So far, we’ve learned how to query and extract the different DOM nodes from our React components. Now, it’s time for us to learn how to mimic user interactions, such as clicking a checkbox and typing text. Once again, this entire process has been made easier for us with the help of another library in the @testing-library suite: @testing-library/user-event.

// This library exports a single object, userEvent, that can be imported in a test file like so:


import userEvent from '@testing-library/user-event';

// The userEvent object contains many built-in methods that allow us to mimic user interactions. Typically, they follow the same syntax pattern:

userEvent.interactionType(nodeToInteractWith);


// Here is an example where we mimic a user filling in a text box. Note that in this case, a second argument is provided as the text to be typed into the box.


import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const GreetingForm = () => {
  return(
    <form>
      <label htmlFor="greeting">
        Greeting:
      </label>
      <input type="text" id="greeting" />
      <input type="submit" value="Submit" />
    </form>
  );
};

it('should show text content as Hey Mack!', () => {
  // Render the component to test
  render(<GreetingForm />);
  // Extract the textbox component
  const textbox = screen.getByRole('textbox');
  // Simulate typing 'Hey Mack!'
  userEvent.type(textbox, 'Hey Mack!');
  // Assert textbox has text content 'Hey Mack!'
  expect(textbox).toHaveValue('Hey Mack!');
});


// In the example above, the userEvent.type() method is used, which accepts a DOM node to interact with (textbox) and a string to type into that node (`’Hey Mack!’).

// The userEvent object has methods for simulating clicks (userEvent.click()), hovering (userEvent.hover()), and much more. Once again, instead of memorizing all of these, it is recommended that you read the docs to find the method best suited for your needs.


it("Should add a new thought", () => {
  render(<App />);
  // Grab the text box and the submit button.
  const input = screen.getByRole("textbox");
  const submit = screen.getByText("Add");

  // TODO: Add testing logic to simulate user interactions here
  userEvent.type(input, "Did I forget my keys?")
  userEvent.click(submit)
  // Assert that the thought appears
  const thought = screen.getByText("Did I forget my keys?");
  expect(thought).toBeInTheDocument();
});




//  ----- The waitFor() method


// How would you test that the header is removed? Using screen.findByX() methods won’t work because there won’t be an element to query once it’s removed! Using only screen.queryByX() methods won’t work either, as the component is removed asynchronously.

// Fortunately, RTL provides another function that can be used for asynchronous testing that will be perfect for this scenario - the waitFor() function. In order to use this function, we need to import it from @testing-library/react.



import { waitFor } from '@testing-library/react';


// As with the other async functions, the waitFor() function returns a Promise, so we have to preface its call with the await keyword. It takes a callback function as an argument where we can make asynchronous function calls, perform queries, and/or run assertions.

await waitFor(() => {
  expect(someAsyncMethod).toHaveBeenCalled();
  const someAsyncNode = screen.getByText('hello world');
  expect(someAsyncNode).toBeInTheDocument();
});



// Now, let’s get back to the example. To test that a component disappears asynchronously, we can combine the waitFor() function with .queryByX() methods:


it('should remove header display', async () => {
  // Render Header
  render(<Header/>)
  // Extract button node 
  const button = screen.getByRole('button');
  // click button
  userEvent.click(button);

  // Wait for the element to be removed asynchronously
  await waitFor(() => {
    const header = screen.queryByText('Hey Everybody');
    expect(header).toBeNull()
  })
});



// this exercice example

it("Should show Thought to be removed", async () => {
  render(<App />);
  const input = screen.getByRole("input");
  const submit = screen.getByRole("submit");
  userEvent.type(input, "I have to call my mom.");
  userEvent.click(submit);

  //Write your test logic here!
  await waitFor(() => {
    const thought = screen.queryByText('I have to call my mom.')
    expect(thought).toBeNull()
  })
});