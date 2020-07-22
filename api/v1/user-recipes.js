// the users resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectUserRecipes = require("../../queries/selectUserRecipes");

// @route       GET api/v1/users
// @desc        GET  a valid user via email and password
// @access      Public

router.get("/", (req, res) => {
   console.log(req.query);
   const { userId } = req.query;
   db.query(selectUserRecipes(userId))
      .then((dbRes) => {
         res.json(dbRes);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;
