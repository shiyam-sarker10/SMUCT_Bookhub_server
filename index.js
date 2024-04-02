const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
  ConnectionPoolClosedEvent,
} = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

//! middleware
app.use(cors());
app.use(express.json());


//! connect with mongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u5hejig.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server    (optional starting in v4.7)
    // await client.connect();
    //! all collections
    const userCollection = client.db("devlab").collection("userInfo");

    //! Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//! initially run the server
app.get("/", (req, res) => {
  res.send("Devlab server is running");
});
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

// "dev": "nodemon src/app.js",
