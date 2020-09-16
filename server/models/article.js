let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let Article = new Schema({
  "title":String,
  "author":String,
  "category":String,
  "time":String,
  "body":String,
  "star":Number,
})

module.exports = mongoose.model('article',Article);