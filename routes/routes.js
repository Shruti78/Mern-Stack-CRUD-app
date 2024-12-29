const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("index", {title:"Home page"});
});

router.get("/add", (req, res)=>{
    res.render("add_users", {title:"Add Users"});
});

module.exports= router;