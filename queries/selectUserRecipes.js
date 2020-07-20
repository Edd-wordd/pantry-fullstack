module.exports = function selectUserRecipes(userId) {
   return `
     SELECT 
         *
     FROM
         recipes
     WHERE
         recipes.created_by_user_id = '${userId}'
     `;
};
