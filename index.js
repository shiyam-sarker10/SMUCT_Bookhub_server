
const express = require("express")
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;


// middleWares 

app.use(express.json());
app.use(cors());

// uri of data base 

 const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.obcasl9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

 const client = new MongoClient(uri, {
   serverApi: {
     version: ServerApiVersion.v1,
     strict: true,
     deprecationErrors: true,
   },
 });

 async function run() {
   try {
     const booksCollection = client.db("SMUCT").collection("books");


    //  adding book to book collection 
     app.post("/addBook", async (req, res) => {
       const task = req.body;
       const result = await booksCollection.insertOne(task);
       res.status(200).json(result);
     });
     

    //  getting all book data  
     app.get("/allBook", async (req, res) => {
       const result = await booksCollection.find().toArray();
       res.json(result);
     });
     
    //  getting  book data by id 
     app.get("/singleBook", async (req, res) => {
        if(!req.query.id){
            res.status(400).json("no id found")
        }
       const id = req.query.id;
       const query = { _id: new ObjectId(id) };
       const result = await booksCollection.findOne(query);
       res.json(result);
     });
    //  getting  book data by category
     app.get("/categoryBook", async (req, res) => {
        if(!req.query.category){
            res.status(400).json("no category found");
        }
       const category = req.query.category;
       const query = { genre: category };
       const result = await booksCollection.find(query).toArray();
       res.json(result);
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