const express = require("express");
const { addBook, getAllBooks, singleBook } = require("../../api/controllers/books");
const router = express.Router()



// adding book 

router.post("/addBook", addBook )

// getting all books  
router.get("/allBook", getAllBooks )

// getting single book by id 
router.get("/singleBook", singleBook )

module.exports = router