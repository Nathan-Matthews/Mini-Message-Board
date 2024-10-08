const express = require('express');
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { message: "EJS rocks!" });
  });
  

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
