const app = require("express").Router()
const base_url = "http://localhost:3000";
const axios = require('axios');

app.get("/" , async (req, res) => {
    try {
        const response = await axios.get(base_url + '/books');
        res.render("books" , {books : response.data});
    } catch (err) {
        console.log(err);
        res.status(500).send('Error');
    }
});


app.get("/book/:id" , async (req, res) => {
    try {
        const response = await axios.get(base_url + '/books/' + req.params.id);
        res.render("book" , {book: response.data});
    } catch(err) {
        console.log(err);
        res.status(500).send('Error');
    }
});

app.get("/create" , (req, res) => {
    res.render("create");
});

app.post("/create" , async (req,res) => {
    try {
        const data = {title: req.body.title , author: req.body.author};
        await axios.post(base_url + '/books' , data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Error');
    }
});

app.get("/update/:id" , async (req, res) => {
    try {
        const response = await axios.get (
            base_url + '/books/' + req.params.id);
            res.render("update" , {book: response.data});
    } catch (err) {
        console.log(err);
        res.status(500).send('Error');
    }
});


app.post("/update/:id" , async (req, res) => {
    try {
        const data = {title: req.body.title , author: req.body.author};
        await axios.put(base_url + '/books/' + req.params.id, data );
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.status(500).send('Error');
    }
});

app.get("/delete/:id" , async (req,  res) => {
    try {
        await axios.delete(base_url + '/books/' + req.params.id);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.status(500).send('Error');
    }
});

module.exports = app;