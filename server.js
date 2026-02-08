const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my website.");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at Port: ${PORT}`)
})