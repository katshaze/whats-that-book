import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

const App = () => {
  return (
    <div className="app">
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
