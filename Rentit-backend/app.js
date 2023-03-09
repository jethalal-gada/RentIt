const fs = require('fs');
const express = require('express');
const app = express();
const port = 2000;
app.use(express.json());

app.listen(port, () => {
  console.log(`listening port ${port}...`);
});
app.get('/', (req, res) => {
  res.end('hi');
});
