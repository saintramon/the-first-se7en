const express = require("express");
const app = express();
const port = 3000;
// Listen for requests on port
app.listen(port);


app.get("/HelloWorld", (req, res) => {
    res.json({
        groupName : "Client Side",
        food: "food"

    })
});
