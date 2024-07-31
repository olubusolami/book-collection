const Book = require("./bookModel");

// POST request
exports.createBook = async function (req, res) {
  try {
    const isbnExist = await Book.findOne({ isbn: req.body.isbn });
    if (isbnExist) {
      return res.status(400).json("Book Already Exists. Enjoy Reading");
    }

    const book = req.body;
    const newBook = await Book.create({
      title: book.title,
      author: book.author,
      publishedDate: book.publishedDate,
      isbn: book.isbn,
    });

    return res.status(201).json({ message: "New book created", newBook });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PATCH request
exports.updateBookCoverImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        coverImage: req.file.path,
      },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET request
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ books });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET request /book/:id to fetch a single book
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ book });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PUT request
exports.updateBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        stage: req.body.stage,
      },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book is updated successfully", book });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// DELETE request /book/:id
exports.deleteBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
