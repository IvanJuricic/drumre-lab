const express = require("express");
const connectDB = require("./server/config/db");
require("dotenv").config();

connectDB();

const app = express();

// Add JSON middleware
app.use(express.json({ extended: false }));

// Define routes

//app.use("/users", require("./server/routes/users"));
//app.use("/auth", require("./server/routes/auth"));

const PORT = process.env.PORT || 5000;

//app.get("/", (req, res) => res.send("Server running!\n"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
