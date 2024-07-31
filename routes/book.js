const express = require("express");
const router = express.Router();
const bookController = require("../app/book/bookContoller");
const upload = require('../app/middleware');

//POST request to create a new book
router.post("/post/books", bookController.createBook);

//GET reqest to fetch all books
router.get("/get/books", bookController.getBooks);

//GET request to fetch a single book
router.get("/get/books/:id", bookController.getBookById);

//PUT request
router.put("/put/books/:id", bookController.updateBookById);

//PACTH request
router.patch('/books/cover-image/:id', upload, bookController.updateBookCoverImage);

//DELETE request
router.delete(
  "/delete/books/:id",
  bookController.deleteBookById
);

module.exports = router;