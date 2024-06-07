// import required source
const express = require("express");
const cors = require("cors");

// makesure the app is running
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
