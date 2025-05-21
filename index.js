require('dotenv').config(); // 🟢 Load .env file

const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;  // 🟢 Ensure MONGO_URI is loaded

if (!uri) {
    console.error("❌ MONGO_URI is not defined! Check your .env file.");
    process.exit(1);
}

app.use(cors());
app.use(express.json());

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
        console.log("✅ Connected to MongoDB!");

        const bookCollection = client.db("kitabganj").collection("kitab");

        // 📌 Upload a book (POST)
        app.post("/upload-book", async (req, res) => {
            const data = req.body;
            const result = await bookCollection.insertOne(data);
            res.send(result);
        });

        // 📌 Get all books (GET)
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

        // 📌 Get a single book by title (GET)
        app.get("/book/:name", async (req, res) => {
            const name = req.params.name;
            const filter = { book_title: name };
            const result = await bookCollection.findOne(filter);
            res.send(result);
        });

        // 📌 Update a book (PATCH)
        app.patch("/book/:id", async (req, res) => {
            const id = req.params.id;
            const updateBookData = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };

            const updateDoc = {
                $set: { ...updateBookData }
            };

            const result = await bookCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

        // 📌 Delete a book (DELETE)
        app.delete("/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollection.deleteOne(filter);
            res.send(result);
        });

        // 📌 Search books (GET)
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

        // ✅ Ping MongoDB
        await client.db("admin").command({ ping: 1 });
        console.log("✅ Pinged your deployment. MongoDB is working!");
    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err);
    }
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
