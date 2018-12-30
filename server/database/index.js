//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose
  .connect('mongodb://rheawin:asdas111@ds145184.mlab.com:45184/blog')
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('MongoDB Not Connected');
});

module.exports = mongoose.connection