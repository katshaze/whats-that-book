import React from "react";
import ReactDOM from "react-dom";
import Book from "./BookSearch";
import Writer from "./WriterSearch";

const App = () => {
  return (
    <div className="container">
      <Book />
      <Writer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
