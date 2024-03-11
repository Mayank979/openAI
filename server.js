require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const openApiCall = require("./openAi");
const app = express();

app.use(express.urlencoded({ extended: true }));

bodyParser.json();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("form", { message: "" });
});

app.post("/", async (req, res) => {
	const result = await openApiCall(req.body.data);
	res.render("form", { message: result });
});

app.get("*", (req, res) => res.send("bro only '/' route works"));

app.listen(3000, () => console.log("server started on port 3000"));
