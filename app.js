const express = require("express");
const connectDB = require("./server/config/db");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

connectDB();

const app = express();

// Add JSON middleware
app.use(express.json({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.use("/api/user", require("./server/routes/user"));
app.use("/api/auth", require("./server/routes/auth"));

const PORT = process.env.PORT || 5000;

// Webapp root page
app.get("/", (req, res) =>
  res.send('<a href="api/auth/login">Authenticate with Google</a>')
);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
