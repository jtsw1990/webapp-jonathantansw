if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const path = require("path");
const express = require("express");
const port = process.env.PORT;
const app = express();
const favicon = require('serve-favicon');


app.set("view engine", "ejs");
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, "public")));

// middleware for serving favicon
app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")));

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
    const articles = [{
            title: "Explainable ML: A peek into the black box through SHAP",
            photo: "img/article_img_shap.jpg",
            description: "Actuaries Digital",
            link: "https://www.actuaries.digital/2021/02/05/explainable-ml-a-peek-into-the-black-box-through-shap/"
        },
        {
            title: "Git version control, because the Recycle Bin doesn’t count",
            photo: "img/article_img_git.png",
            description: "Actuaries Digital",
            link: "https://www.actuaries.digital/2019/04/17/analytics-snippet-version-control-because-the-recycle-bin-doesnt-count/"
        },
        {
            title: "Natural Language Processing Text Classification",
            photo: "img/article_img_nlp.png",
            description: "Actuaries Digital",
            link: "https://www.actuaries.digital/2018/11/20/analytics-snippet-natural-language-processing-text-classification/"
        },
        {
            title: "The Simple Linear Regression Guide",
            photo: "img/article_img_slr.png",
            description: "In-depth dive into simple linear regression, including mathematics and assumptions...",
            link: "/articles/linear_regression"
        },
        {
            title: "Feature Engineering Explained",
            photo: "img/article_img_feng.png",
            description: "An introduction to the why and how of feature engineering, with visual representation...",
            link: "/articles/feature_engineering"
        },
        {
            title: "Introduction to Goodness of Fit",
            photo: "img/article_img_gof.png",
            description: "Notebook tutorials on fitting and evaluating distributions...",
            link: "https://github.com/jtsw1990/stats-goodness-of-fit-tutorial"
        }
    ];
    res.render("articles", {
        articles: articles,
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


app.get("/projects", (req, res) => {
    res.render("projects", {
        currentPage: req.originalUrl
    });
})


app.get("/professional", (req, res) => {
    res.render("professional", {
        currentPage: req.originalUrl
    });
})

app.get("/personal", (req, res) => {
    res.render("personal", {
        currentPage: req.originalUrl
    });
})



app.get("/videos", (req, res) => {
    res.render("videos", {
        currentPage: req.originalUrl
    });
})


app.get("/sitemap", (req, res) => {
    res.render("sitemap", {
        currentPage: req.originalUrl
    });
})