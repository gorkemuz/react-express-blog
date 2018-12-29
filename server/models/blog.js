import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    text: String,
    today: String
})

module.exports = mongoose.model('Blog', BlogSchema)
