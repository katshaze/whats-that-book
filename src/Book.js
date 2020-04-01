import React from "react";
import axios from "axios";

const Book = ({ name, author, image, bookId }) => {
  let hero = "http://placecorgi.com/300/300";
  if (image) {
    hero = image;
  }

  async function requestBookDetails() {
      console.log(`book id is ${bookId}`);
      
    let response = await axios.post('http://localhost:3000/book/details', {
      bookId
    });
    console.log(response);
    response = response.data;
    console.log(response);
    
  }

  return (
    <div className="book">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h4>
          <button
            onClick={e => {
              e.preventDefault();
              requestBookDetails();
            }}
            onKeyPress={e => {
              e.preventDefault();
              requestBookDetails();
            }}
          >
            {name}
          </button>
        </h4>
        <h5>{author}</h5>
      </div>
    </div>
  );
};

export default Book;
