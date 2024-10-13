const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, //optional
  })
  .then((con) => console.log('DB connction established'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
const host = process.env.LOCALHOST;

app.get("/api-rentit/v1", (req, res) => {
  res.json({ version: "Rentit APIs v0" });
});

app.listen(port, () => {
  console.log(`listening host ${host} and port ${port}...`);
});
