var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/practice_db';

const parse_Api = require('../api/external.api') 
//console.log(data,"this is the data in database code")



const client = new MongoClient(url);
async function run( ) {
  try {
    await client.connect();
    const database = client.db("practice_db");
    const users = database.collection("external_users");
    
    const options = { ordered: true };
    const data = await parse_Api()
    console.log(data)
    /*

      here i should add the code to parse the external api data to add to the database.

            // take the data and form it according to the schema and give request.

            // i have to give user Roles before updating in the database
    */
    const result = await users.insertMany(data, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
    //res.status(200).send("Moderator Content.");
  }
}
//run().catch(console.dir);

module.exports= {
  run
}