import dbConnect from './mongoConnect.js'


export const submitProfile = async (req, res) => {
  console.log('req.body ->', req.body)
  let newProfile = req.body // { name: 'Brad Jones', username: 'BJ2044', age: 30, sport: 'football', school: 'Pine Crest', classof: 2011, state: 'Florida', position: 'Linebacker' }
  //ADD CONST IN FRONT OF LINE BELOW
  const profile = dbConnect.insertOne(newProfile)

  //GET ID FROM THAT VARIABLE

  // ADD ID TO RESPONSE BELOW INSTEAD OF NEWPROFILE
  //{message: 'Profile was added', id: id}
   res.send({'Profile was added': newProfile})
}

export async function getProfiles(req, res) {
  // connect to the database
  const db = dbConnect();
  // get the profiles
  const collection = await db.collection("profiles").find().toArray()
  // catch any errors -> status 500
    .catch(err => {
      res.status(500).send(err);
      return;
    });
    res.send(collection);
  }