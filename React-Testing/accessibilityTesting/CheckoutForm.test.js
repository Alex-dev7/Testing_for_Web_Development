import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

it("finds form fields and checkout button", () => {
  render(<CheckoutForm />);
  //Put your test logic below!
  screen.getByRole('textbox', {name: /name/i})
  screen.getByRole('textbox', {name: /email/i})
  screen.getByRole('textbox', {name: /address/i})
  screen.getByRole('combobox', {name: /payment method/i})
  screen.getByRole('button', {name: /checkout/i})
  
});



// //  ---------      Testing for Accessibility
// Now that we’ve covered a wide stretch of RTL methods, let’s talk about accessibility and how it can help you write better tests. One of the guiding principles of React Testing Library is to write “queries that reflect the experience of visual/mouse users as well as those that use assistive technology.” Usually, this means using the same text that the user would see, rather than the implementation details like class names or IDs.

// Writing tests that adhere to this principle forces you to make your applications more accessible. If a test can find and interact with your elements by their text, it’s more likely that a user who uses assistive technology can as well.

// One way we can write tests with accessibility concerns in mind is by sticking to querying with ByRole queries (getByRole, findByRole, queryByRole). The ByRole variant will be able to query any elements within the accessibility tree. If you are unable to query for the component you want to test, you may have just exposed a part of your application that is inaccessible.

// Let’s see this in action. Suppose we’re testing an input form:
<input id="search" value="" />
// If we try to use getByRole, it will not be able to query for this element. This exposes a component that is inaccessible. To fix it, we would have to make some modifications to the element by adding a type which provides a role and label with an htmlFor attribute which provides an accessible name for an element. Note that how you assign accessible names differs based on the tag you’re using.
//   <label htmlFor="search">
//      <input type="search" id="search" value="" />
//   </label>
// Then our query can be:
screen.getByRole('searchbox', {name: /search/i})


// While ByRole is a great default for accessibility, you can visit the React Testing Library Playground for suggestions on accessible queries for more complex needs.

// Including accessibility considerations in your testing process can help proactively identify and address potential accessibility issues. This not only ensures that your application is inclusive and usable by a wider range of users but also enhances the overall quality and user experience.