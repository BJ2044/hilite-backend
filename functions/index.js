import functions from "firebase-functions"
import express from 'express'
import cors from 'cors'

import { submitProfile, getProfiles } from './profiles.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/create-profile', submitProfile)
app.get('/my-profile', getProfiles)


export const api = functions.https.onRequest(app)
