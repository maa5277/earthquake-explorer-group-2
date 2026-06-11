const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function startServer() {
    await client.connect();

    db = client.db(process.env.DB_NAME);

    app.get("/", (req, res) => {
        res.json({
            message: "Earthquake API running"
        });
    });

    app.get("/api/count", async (req, res) => {
        const count = await db.collection("earthquakes").countDocuments();
        res.json({ count });
    });

    app.get("/api/earthquakes", async (req, res) => {
        const docs = await db
            .collection("earthquakes")
            .find({})
            .limit(20)
            .toArray();

        res.json(docs);
    });

    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
    });
}

startServer().catch(console.error);
