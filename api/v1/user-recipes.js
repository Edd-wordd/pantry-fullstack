// the userRecipe resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectUserRecipes = require("../../queries/selectUserRecipes");
const { toJson, toSafeParse } = require("../../utils/helpers");

// @route       GET api/v1/userRecipes
// @desc        GET  all recipes for the user
// @access      Public

router.get("/", (req, res) => {
   db.query(selectUserRecipes("8c3ee2c4-d34d-4fe1-a438-e9ea9271c910"))
      .then((dbRes) => {
         const users = toSafeParse(toJson(dbRes));
         console.log(users);
         res.json(users);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;
