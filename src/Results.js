import React from "react";

const Results = ({ searchResults }) => {
    if (searchResults) {
        console.log(searchResults.length);
    };
    
  return (
    <div className="bookResults">
      {searchResults[0] === 'initial render' ? (
          <h3></h3>
      ) : searchResults.length === 0 ? (
        <h3>No books found that match your search, soz</h3>
      ) : (
        <h3>We got some hits! Let me just figure out how to display them...</h3>
      )}
    </div>
  );
};

export default Results;
