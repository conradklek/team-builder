import React, { useState } from "react";
import "./App.css";

function Form({ teamMembers, setTeamMembers }) {
  const [user, setUser] = useState({ name: "", email: "", role: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.email);
    console.log(user.role);
    setTeamMembers([...teamMembers, user]);
  };

  return (
    <div className="Form">
      {console.log(user)}
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Form;
