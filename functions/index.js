// const functions = require("firebase-functions");
import express from 'express'
import cors from 'cors'

import functions from "firebase-functions"
import { addProfile } from './profiles.js'

const PORT = 5002
const app = express()
app.use(cors())
app.use(express.json())

app.post('/test', addProfile)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))


export const api = functions.https.onRequest(app)



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
