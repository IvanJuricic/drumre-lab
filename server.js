const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Server running!\n"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
