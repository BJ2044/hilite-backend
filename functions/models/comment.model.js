import { MongoClient } from "mongodb";
const Schema = MongoClient.Schema
const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String
  }
});

const Comment = MongoClient.model("Comment", commentSchema);
module.exports = Comment;