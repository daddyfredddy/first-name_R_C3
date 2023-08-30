// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>'Hello world'</h1>
      <h2>Full name: Fredrick Codero</h2>
      <h2>
        Educational Background: I have studied Electrical and electronics
        Engineering.
      </h2>
      <h2>Professional Background: Worked as broadcast Engineer. </h2>
      <h2>Skills: Outside broadcast management.</h2>

      <Button Login={"LOG IN"} Signin={"SIGN IN"} />
    </div>
  );
}

export default App;
