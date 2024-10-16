const express = require("express");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config();
const PORT = process.env.PORT || 5025;
const routes = require("./routes/routes.js");


app.use("/api", routes);

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is Successfully Running http://localhost:${PORT}/api`);
    }
})
