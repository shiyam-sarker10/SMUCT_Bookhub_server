const expressImports = require("../../../config/expressImports");
const Book = require("../../../models/book");
expressImports()

const addBook = async (req, res) => {
  const book = new Book({
    bookName: req.body.bookName,
    author: req.body.author,
    genre: req.body.genre,
    desc: req.body.desc,
    bookImage: req.body.bookImage,
    publishedDate: req.body.publishedDate,
  });
  console.log(book);
  try {
    await book.save();
    res.status(201).json({
      message: "Book added successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = addBook;
