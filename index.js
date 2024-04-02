const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.obcasl9.mongodb.net/?retryWrites=true&w=majority`;
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const taskCollection = client.db("TaskieeDB").collection("tasks");
    const bookCollection = client.db("TaskieeDB").collection("books");

    app.post("/addBook", async (req, res) => {
      const book = req.body;
      const result = await bookCollection.insertOne(book);
      res.send(result);
    });
   

    app.get("/books", async (req, res) => {
      try {
        const books = await bookCollection.find({}).toArray();
        res.json(books);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });


    app.delete("/deleteTask", async (req, res) => {
      try {
        if (!req.query.id) {
          return res.status(400).json({ error: "No ID Provided" });
        }
        const id = req.query.id;
        const query = { _id: new ObjectId(id) };
        const result = await taskCollection.deleteOne(query);
        res.json(result);
      } catch (error) {
        console.error("Error updating request:", error);
        res.status(500).json({ error: "Internal sever error" });
      }
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("the project is working");
});
app.listen(port, () => {
  console.log(`This is server is running on port : ${port}`);
});
