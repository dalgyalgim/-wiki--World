const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/search_history')
  .then(() => console.log('Conected to DB'))
  .catch((err) => console.log(err));