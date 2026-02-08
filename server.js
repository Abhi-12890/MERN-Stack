const express = require("express");
const app = express();
const Router = require("./router/auth-router");

app.use("/api/auth", Router);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to my website.And Enjoy my Website1232323hello.");
// });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at Port: ${PORT}`);
})
