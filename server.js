var express = require("express"),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 8080,
    app = express();

app.use(bodyParser.json());
app.use("/", express.static("dist"));
app.listen(port);
