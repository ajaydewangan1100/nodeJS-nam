require("dotenv").config(); // to access environment variables
const { MongoClient } = require("mongodb");

const DB_URI =
  "mongodb+srv://ajaydewangan1100:" +
  process.env.DB_USER_PASS +
  "@cluster0.rrg8o.mongodb.net/";

const client = new MongoClient(DB_URI);

const dbName = "Namastedev_start";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("start");

  //   INSERT DATA
  const data = {
    name: "Piku",
    age: 25,
    city: "New York",
    country: "USA",
  };

  //   const insertResult = await collection.insertMany([data]);

  // READ
  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);

  //   COUNT DOCUMENTS
  //   const resultCount = await collection.countDocuments({});
  //   console.log("Total documents =>", resultCount);

  //     FIND ALL DOCUMNETS WITH A FILTER OF NAME
  const result = await collection.find({ name: "Piku" }).toArray();
  console.log(result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
