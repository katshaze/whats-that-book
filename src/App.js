import React from "react";
import ReactDOM from "react-dom";
import { navigate } from "@reach/router";
import Search from "./Search";

const App = () => {
  navigate("/");
  
  return (
    <div className="app">
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
