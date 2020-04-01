var express = require("express");
var router = express.Router();
const axios = require("axios");
const parseString = require("xml2js").parseString;

// router.get("/", function(req, res, next) {
//     res.send("API is working properly");
// });

let book;
let bookId;
// build api URL with user's book input

// const getBook = async (url) => {
//   try {
//     return await axios.get(url);
//   } catch (error) {
//     console.error(error);
//   }
// };

router.post("/", (req, res) => {
  console.log(req.body);
  book = req.body.book;
  console.log(`Got the book - you want me to look up ${book}`);

  const requestUrl = `https://www.goodreads.com/search.xml?key=RBr5ZI7tQPC7cDN9K2oa3A&q=${book}`;

  axios
    .get(requestUrl)
    .then(response => {
      parseString(response.data, function(err, result) {
        result = result.GoodreadsResponse.search[0].results;
        res.send(result);
      });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

router.post("/details", (req, res) => {
  console.log(req.body);
  bookId = req.body.bookId;
  console.log(`Got the book to search for, id is ${bookId}`);

  const requestUrl = `https://www.goodreads.com/book/show.xml?key=RBr5ZI7tQPC7cDN9K2oa3A&id=${bookId}`;

  axios
    .get(requestUrl)
    .then(response => {
      parseString(response.data, function(err, result) {
        result = result.GoodreadsResponse.book[0];
        console.log(result);
        res.send(result);
      });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
