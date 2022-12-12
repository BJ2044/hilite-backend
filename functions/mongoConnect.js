import { MongoClient } from "mongodb" 
import { uri } from "./secrets.js"

 
export default function dbConnect() {
const client = new MongoClient(uri); //create a object from a constructor function
return client.db("hidatabase")
}
