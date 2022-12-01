import functions from "firebase-functions"
import express from 'express'
import cors from 'cors'

import { submitProfile } from './profiles.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/', submitProfile)

app.get('/', async (req, res) => {
  // const allProfiles = await profiles.find().toArray()
  // res.send(allProfiles)
  res.send('<marquee>testing</marquee>')
})

// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))


export const api = functions.https.onRequest(app)
