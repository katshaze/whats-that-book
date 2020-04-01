import React from "react";
import Book from "./Book";

const Results = ({ searchResults }) => {
  if (searchResults) {
    console.log(searchResults.length);
    console.log(searchResults);

    if (searchResults[0]) {
      console.log(searchResults[0].best_book[0].image_url[0]);
      console.log(searchResults[0].best_book[0].id[0]._);
    }
  }

  return (
    <div className="results">
      {searchResults.length === 0 ? (
        <h3>No books found that match your search, soz</h3>
      ) : (
        searchResults.map(result => (
          <Book
            key={result.best_book[0].id[0]._}
            bookId={result.best_book[0].id[0]._}
            name={result.best_book[0].title[0]}
            author={result.best_book[0].author[0].name[0]}
            image={result.best_book[0].image_url[0]}
          />
        ))
      )}
    </div>
  );
};

export default Results;
