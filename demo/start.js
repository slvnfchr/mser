
"use strict";

var express = require("express"),
	opener = require("opener");

var app = express();
app.set("port", 8080);
app.use("/", express.static(process.cwd()));
app.listen(app.get("port"));
opener("http://localhost:" + app.get("port") + "/demo/");
