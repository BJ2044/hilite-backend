import { createProfile } from './mongoConnect.js'

export const addProfile = async (req, res) => {
  console.log('req.body ->', req.body)
  let newProfile = { name: 'Brad Jones', username: 'BJ2044', age: 30, sport: 'football', school: 'Pine Crest', classof: 2011, state: 'Florida', position: 'Linebacker' }
  await createProfile.insertOne(newProfile)
   res.send({'Profile was added': newProfile})
}