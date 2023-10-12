import React, { useState } from "react";

const CheckoutForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    address: "",
    payment: "Credit Card",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:
        <label htmlFor="name">
           <input id="name" name="name" type="text" onChange={handleChange} />
        </label>
      </div>
      <div>
        Email:
        <label htmlFor="email">
            <input id="email" name="email" type="email" onChange={handleChange} />
        </label>
      </div>
      <div>
        Address:
        <label htmlFor="address">
            <input
            id="address"
            name="address"
            type="text"
            onChange={handleChange}
            />
        </label>
      </div>
      <div>
      <label htmlFor="payment">
        Payment Method:
          <select id="payment" name="payment" onChange={handleChange}>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>PayPal</option>
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Checkout</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
