import "./App.css";
import Form from "./Form";
import React, { useState } from "react";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    { name: "", email: "", role: "" },
  ]);
  return (
    <div className="App">
      <h1>Team Members</h1>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
    </div>
  );
}

export default App;
