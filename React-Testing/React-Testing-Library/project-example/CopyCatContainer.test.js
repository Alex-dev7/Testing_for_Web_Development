import { CopyCatContainer } from "./CopyCatContainer";
import "regenerator-runtime";
import React from 'react';
import {waitFor, render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


it("Should display copied text",async () => {
  render(<CopyCatContainer />);

  const input = screen.getByRole('textbox');
  userEvent.type(input, 'Hello World!');

  const par = await screen.findByText(/Hello World!/i);
  expect(par).toBeInTheDocument();
});

it("Should remove copied text after putting on tape",async () => {
  render(<CopyCatContainer/>);
  // Simulate user typing in textbox
  const input = screen.getByRole('textbox');
  userEvent.type(input,'My mouth is shut');
  // Assert that input text appears in paragraph
  const par = await screen.findByText(/My mouth is shut/i);
  expect(par).toBeInTheDocument()
  // Simulate clicking on copycat image.
  const copyCatImage = screen.getByRole("button", { name: /copycat/i });
  userEvent.click(copyCatImage);
  // Assert that paragraph text will eventually disappear
  await waitFor(() => {
    const missingPar = screen.queryByText(/My mouth is shut/i);
    expect(missingPar).not.toBeInTheDocument();
  });
});

it("Should display copied text after removing tape",async () => {
  // Render CopyCatContainer
  render(<CopyCatContainer />); 
  // Get the input textbox element
  const input = screen.getByRole("textbox"); 
  // Await typing "Eventually this will appear" into the input before moving on
  await userEvent.type(input, "Eventually this will appear"); 
  // Get the copycat image button
  const copyCatImage = screen.getByRole("button", { name: /copycat/i }); 
  // Simulate a click on the copycat image
  userEvent.click(copyCatImage); 
  // Find and wait for the quiet cat image button to be displayed before moving on
  const quietCatImage = await screen.findByRole("button", { name: /quietcat/i }); 
  // Simulate a click on the quiet cat image
  userEvent.click(quietCatImage); 
  // Find and wait for "Eventually this will appear" to be displayed
  const copiedText = await screen.findByText("Eventually this will appear");
});
