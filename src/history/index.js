const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/expressjs_tutorial')
  .then(() => console.log('Conected to DB'))
  .catch((err) => console.log(err));