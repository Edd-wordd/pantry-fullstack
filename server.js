require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
   host: process.env.RDS_HOST,
   user: process.env.RDS_USER,
   password: process.env.RDS_PASSWORD,
   database: "pantry_app",
});

connection.connect();

connection.query(
   `
   SELECT 
      *
   FROM
      recipes
   WHERE
      recipes.created_by_user_id = '8c3ee2c4-d34d-4fe1-a438-e9ea9271c910'`,
   (error, results, fields) => {
      if (error) {
         console.log(error);
      } else {
         console.log(results);
      }
   }
);

connection.end();
