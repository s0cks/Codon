var express = require("express"),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 9000,
    app = express();

var libraryApi = require("./api/library");

app.use(bodyParser.json());
app.use("/", express.static("dist"));

// Serve api endpoints
var apiRouter = express.Router();
apiRouter.use("/library", libraryApi());

// Initialize api
app.use("/api", apiRouter);

app.listen(port, "127.0.0.1");
