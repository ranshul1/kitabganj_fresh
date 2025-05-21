const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mongodb config


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb://localhost:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents

    const bookCollection = client.db("kitabganj").collection("kitab");

    // insert a book to the db: post method

    app.post("/upload-book", async(req, res) => {
      const data = req.body ;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    })
    
    //get all books from the database

     
    
    //update a book data : patch or update methods
    app.patch("/book/:id", async(req, res)=>{
      const id = req.params.id;
      //console.log(id);
      const updateBookData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
        $set: {
              ...updateBookData
        }
      }
      //update
      const result = await bookCollection.updateOne(filter,updateDoc, options );

      res.send(result);
    })
    
    app.delete("/book/:id", async(req, res)=>{
      const id =  req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    })

    //find by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query.category = req.query.category;
      }
      if (req.query?.uploadedBy) {
        query.uploadedBy = req.query.uploadedBy;
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    });
    
    // to get single book data
    app.get("/book/:name", async(req, res)=>{
      const name = req.params.name;
      const filter = {book_title: name};
      const result = await bookCollection.findOne(filter);
      res.send(result);
    });
    app.get("/search-books", async (req, res) => {
  const query = req.query.q;
  const searchQuery = {
    $or: [
      { book_title: { $regex: query, $options: "i" } },
      { author_name: { $regex: query, $options: "i" } }
    ]
  };

  const result = await bookCollection.find(searchQuery).toArray();
  res.send(result);
});

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})