import { MongoClient } from "mongodb" 
import { uri } from "./secrets.js"

 
const client = new MongoClient(uri)
const database = client.db('hidatabase')

client.connect()
console.log('Connected to Mongo')
export const createProfile = database.collection('profiles')