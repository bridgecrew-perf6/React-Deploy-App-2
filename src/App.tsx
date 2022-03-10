import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 👍🏻 React Deployment 🙂 Practical-7 👍🏻</p>
        <a
          className="App-link"
          href="https://create-react-app.dev/docs/deployment/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Deployment
        </a>
        <h3>{process.env.REACT_APP_MY_API}</h3>
      </header>
    </div>
  );
}

export default App;
