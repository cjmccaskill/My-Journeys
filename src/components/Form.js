import React from "react";
import Header from "./Header";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mrgryoaq");
  if (state.succeeded) {
    return (
      <div className="header-form">
        <Header />
        <p className="form-message">Thanks for joining!</p>
      </div>
    );
  }
  return (
    <div className="header-form">
      <Header />
      <div className="form-container">
        <h2 className="form-title">Sign up for my monthly newsletter.</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label for="full-name">Full Name</label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="First and Last"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email@domain.tld"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <button className="btn" type="submit" disabled={state.submitting}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
