const express = require("express");
const app = express();

app.use("/api/v1/users", require("./api/v1/users"));
app.use("/api/v1/user-recipes", require("./api/v1/user-recipes"));

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 3045;
app.listen(port, () =>
   console.log(`Server Running at http://localhost:${port}`)
);
