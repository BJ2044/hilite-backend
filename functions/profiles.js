import { createProfile } from './mongoConnect.js'

export const submitProfile = async (req, res) => {
  console.log('req.body ->', req.body)
  let newProfile = req.body // { name: 'Brad Jones', username: 'BJ2044', age: 30, sport: 'football', school: 'Pine Crest', classof: 2011, state: 'Florida', position: 'Linebacker' }
  //ADD CONST IN FRONT OF LINE BELOW
  const profile = createProfile.insertOne(newProfile)

  //GET ID FROM THAT VARIABLE

  // ADD ID TO RESPONSE BELOW INSTEAD OF NEWPROFILE
  //{message: 'Profile was added', id: id}
   res.send({'Profile was added': newProfile})
}