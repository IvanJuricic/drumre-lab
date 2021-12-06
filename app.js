const express = require("express");
const connectDB = require("./server/config/db");
require("dotenv").config();

connectDB();

const app = express();

// Add JSON middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("api/user", require("./server/routes/user"));
app.use("api/auth", require("./server/routes/auth"));

const PORT = process.env.PORT || 5000;

// Webapp root page
app.get("/", (req, res) => res.send("Server running!\n"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
