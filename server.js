require("dotenv").config();
const mysql = require("mysql");
const selectUser = require("./queries/selectUser");
const { toJson, toSafeParse } = require("./utils/helpers");

const connection = mysql.createConnection({
   host: process.env.RDS_HOST,
   user: process.env.RDS_USER,
   password: process.env.RDS_PASSWORD,
   database: "pantry_app",
});

connection.connect();

connection.query(selectUser("edward@gmail.com", "replace_me"), (err, res) => {
   if (err) {
      console.log(err);
   } else {
      const users = toSafeParse(toJson(res));
      console.log(users);
   }
});

// connection.query(
//    selectUserRecipes("8c3ee2c4-d34d-4fe1-a438-e9ea9271c910"),
//    (error, results) => {
//       if (error) {
//          console.log(error);
//       } else {
//          console.log(results);
//       }
//    }
// );

connection.end();
