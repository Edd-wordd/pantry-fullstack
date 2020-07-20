module.exports = {
   toJson(data) {
      return JSON.stringify(data);
   },

   toSafeParse(str) {
      try {
         JSON.parse(str);
      } catch (error) {
         console.log(error);
         return str;
      }
      return JSON.parse(str); // could be undefined
   },
};
