const mongoose = require("mongoose");
const expressImports = require("../../../config/expressImports");
const book = require("../../../models/book");
expressImports();

const singleBook = async (req, res) => {
  if (!req.query.id) {
    return res.status(400).json({ message: "Please provide book id" });
  }
  const bookId = new mongoose.Types.ObjectId(req.query.id);
  console.log(bookId);
  try {
    const singleBook = await book.findById(bookId);

    if (!singleBook) {
      console.log("No book found with the given ID");
      return res.status(404).json({ message: "Book not found" });
    }

    console.log("Book found:", singleBook);

    return res.status(200).json( singleBook );
  } catch (error) {
    console.error("Error finding book by ID:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = singleBook;
