import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import butterfly from "./assets/resourse/butterfly.jpg";

const App = () => {
  return (
    <div className="card">
      <img src={butterfly} alt="img" />
      <h1>Wonderful butterfly</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
