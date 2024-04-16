const expressImports = require("../../../config/expressImports");
const book = require("../../../models/book");
expressImports()

const getAllBooks = async (req, res) => {
  try {
    const books = await book.find({});
    res.send(books);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllBooks;

