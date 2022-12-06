import { MongoClient } from "mongodb";
const Schema = MongoClient.Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
});
const User = MongoClient.model("User", userSchema);
module.exports = User;