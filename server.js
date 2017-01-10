var express = require("express"),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 8080,
    app = express();

var libraryApi = require("./api/library");

app.use(bodyParser.json());
app.use("/", express.static("dist"));

var apiRouter = express.Router();
apiRouter.use("/library", libraryApi());

app.use("/api", apiRouter);

app.listen(port, "127.0.0.1");
