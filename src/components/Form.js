import React from "react";
import { useState } from "react";
import Header from "./Header";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a name");
      return;
    }
    setName("");
    setEmail("");
  };

  return (
    <div className="header-form">
      <Header />
      <div className="form-container">
        <h2 className="form-title">Sign up for my monthly newsletter.</h2>
        <hr />
        <form className="email-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
        </form>
      </div>
    </div>
  );
};

export default Form;
