const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

// ✅ Serve static files from React's build folder
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB config
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://anshulrathore:02072003@cluster0.jivyt7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const bookCollection = client.db("kitabganj").collection("kitab");

    // ✅ API Routes
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    });

    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updateBookData
        }
      };
      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    });

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

    app.get("/book/:name", async (req, res) => {
      const name = req.params.name;
      const filter = { book_title: name };
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

    // ✅ Wildcard route must be placed AFTER all API routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
