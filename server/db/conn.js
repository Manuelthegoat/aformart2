const { MongoClient } = require("mongodb");
require("dotenv").config();

// export async function connectToCluster(uri) {
//   let mongoClient;

//   try {
//     mongoClient = new MongoClient(uri);
//     console.log("Connecting to MongoDB Atlas cluster...");
//     await mongoClient.connect();
//     console.log("Successfully connected to MongoDB Atlas!");

//     return mongoClient;
//   } catch (error) {
//     console.error("Connection to MongoDB Atlas failed!", error);
//     process.exit();
//   }
// }

const Db =
  "mongodb+srv://Samuel:yG0FPiKmg8kcWCsF@cluster0.u8sqo7h.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connectToCluster: function (callback) {
    client.connect((error, client) => {
      if (error) {
        return console.log("Unable to connect to database");
      }
      console.log("Connected correctly");
    });
  },
};

// var _db;

// module.exports = {
//   connectToCluster: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db) {
//         _db = db.db("aformart");
//         console.log("Successfully connected to MongoDB.");
//       }
//       return callback(err);
//     });
//   },

//   getDb: function () {
//     return _db;
//   },
// };
