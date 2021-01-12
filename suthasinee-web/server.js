const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express()
const port = process.env.PORT || 5400

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use((req, res, next) => {
  if (!req.query.api_key || req.query.api_key !== 'xyz') {
    res.status(403).json({ message: 'Please supply a valid api_key' })
  } else {
    next()
  }
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})
  