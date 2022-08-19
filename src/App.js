import React, { useState } from "react";

export default function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: preValue.lName,
      //     email: preValue.email
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: preValue.fName,
      //     lName: value,
      //     email: preValue.email
      //   };
      // } else {
      //   return {
      //     fName: preValue.fName,
      //     lName: preValue.lName,
      //     email: value
      //   };
      // }
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  return (
    <div className="App">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="Enter your first name"
          value={contact.fName}
        ></input>
        <br />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Enter your last name"
          value={contact.lName}
        ></input>
        <br />
        <input
          name="email"
          onChange={handleChange}
          placeholder="enter your email"
          value={contact.email}
        ></input>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
