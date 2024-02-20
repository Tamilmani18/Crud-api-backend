const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use("/api/products", productRoutes);

// Default endpoint

app.get("/", (req, res) => {
  res.send("Hello there, this is an express app!");
});

mongoose
  .connect(
    "mongodb+srv://username:password@backenddb.nu7goc4.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
