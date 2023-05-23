const express = require("express");
const app = express();
const port = 3000;

app.get("/yess/:id", (req, res) => {
  res.send(`Hello Yess!${req.params.id}`);
});
app.get("/ferxxo", (req, res) => {
  res.send(`Hello Ferxxo!${JSON.stringify(req.query)}`);
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
