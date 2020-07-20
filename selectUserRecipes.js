module.exports = function selectUserRecipes(user) {
   return `
    SELECT 
        *
    FROM
        recipes
    WHERE
        recipes.created_by_user_id = '${user}'
    `;
};
