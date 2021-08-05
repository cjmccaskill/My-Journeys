import React from "react";
// import { useState } from "react";
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

// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (!name) {
//       alert("Please add a name");
//       return;
//     }
//     setName("");
//     setEmail("");
//   };

//   return (

//   );
// };

export default Form;

{
  /* <form className="email-form" onSubmit={onSubmit}>
  <div className="form-control">
    
  </div>
  <div className="form-control">
    <label>Email:</label>
    <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <input type="submit" value="Sign Up" className="btn" />
</form>;
<label>Name:</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> */
}
