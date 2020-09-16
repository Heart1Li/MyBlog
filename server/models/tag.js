let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let Tag = new Schema({
  "type":String,
})

module.exports = mongoose.model('Tag',Tag);