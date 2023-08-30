require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
// const connection = require("./db");

// Routes
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

// database connection
// connection();

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Used with react
app.use(cors({
}));

// routes
app.use(userRoutes);
app.use(authRoutes);
app.use(productRoutes);

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Jughead', //Collection Name
}).then(() => console.log("Connected to Jughead DB"))
  .catch((err) => {
      console.log("No Connection. Reason: " + err);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`Server started at port: ${PORT}`) })
