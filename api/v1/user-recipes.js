// the users resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectUserRecipes = require("../../queries/selectUserRecipes");

// @route       GET api/v1/users
// @desc        GET  a valid user via email and password
// @access      Public

router.get("/", (req, res) => {
   db.query(selectUserRecipes("8c3ee2c4-d34d-4fe1-a438-e9ea9271c910"))
      .then((dbRes) => {
         console.log(dbRes);
         res.json(dbRes);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;
