const fs = require('fs');
const express = require('express');
const app = express();
const port = 2000;
const cors = require('cors');
app.use(cors());
const items = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/fakedata.json`)
);

//Middlewares
app.use(express.json());

const getItems = (req, res) => {
  // console.log(req.requestTime);
  res.status(200).json({
    status: 'sucess',
    results: items.length,
    // reqAt: req.requestTime,
    data: {
      items: items,
    },
  });
};
const getItemDetails = (req, res) => {
  const item = items.find((e) => e.id == req.params.id);

  if (req.params.id > items.length - 1)
    return res.status(404).json({
      status: 'fail',
      message: 'imvalid ID',
    });

  res.status(200).json({
    status: 'sucess',
    data: {
      item: item,
    },
  });
};

app.route('/api-rentit/v1/items').get(getItems);
app.route('/api-rentit/v1/items/:id').get(getItemDetails);

app.listen(port, () => {
  console.log(`listening port ${port}...`);
});
