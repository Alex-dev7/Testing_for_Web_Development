import { CopyCat } from "./CopyCat";
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'



it("Displays the provided name", () => {
  render(
    <CopyCat
    name="Mack"
    value="Here is an input"
    handleChange={() => {}}
    toggleTape={() => {}}
    isCopying={true}
     />)

    expect(screen.getByRole("heading")).toHaveTextContent("Copy Cat Mack");
});

it("Should display input text in paragraph when isCopying is set to true", () => {
    render(
    <CopyCat
    name="Mack"
    value="Here is an input"
    handleChange={() => {}}
    toggleTape={() => {}}
    isCopying={true}
     />)

     const input = screen.getByRole("textbox");
      expect(input).toHaveValue("Here is an input");
      const par = screen.getByText(/Here is an input/i);
      expect(par).toBeInTheDocument();

});

it("Should not display input text in paragraph when isCopying is set to false", () => {
  render(<CopyCat 
  value={'Here is an input'}
  handleChange={()=>{}}
  toggleTape={()=>{}}
  isCopying={false}
/>);

const input = screen.getByRole("textbox");
expect(input).toHaveValue("Here is an input");
const par = screen.queryByText(/Here is an input/i);
expect(par).not.toBeInTheDocument();

});
