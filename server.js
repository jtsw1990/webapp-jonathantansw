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
    res.redirect("/home");
})


app.get("/home", (req, res) => {
    res.render("home", {
        currentPage: req.originalUrl
    });
})


app.get("/articles", (req, res) => {
    res.render("articles", {
        currentPage: req.originalUrl
    });
})

// Decide if we want to use slugs? or a router function?
app.get("/articles/linear_regression", (req, res) => {
    res.render("pages/linear_regression", {
        currentPage: req.originalUrl
    });
})

app.get("/articles/feature_engineering", (req, res) => {
    res.render("pages/feature_engineering", {
        currentPage: req.originalUrl
    });
})


app.get("/about", (req, res) => {
    res.render("about", {
        currentPage: req.originalUrl
    });
})


app.get("/videos", (req, res) => {
    res.render("videos", {
        currentPage: req.originalUrl
    });
})
