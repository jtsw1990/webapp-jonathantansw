if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const path = require("path");
const express = require("express");
const port = process.env.PORT;
const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => { 
    console.log(`Listening on port ${port}`);
})


app.get("/", (req, res) => {
    res.render("home");
})


app.get("/articles", (req, res) => {
    res.render("articles");
})


app.get("/about", (req, res) => {
    res.render("about");
})
