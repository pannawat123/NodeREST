require("dotenv").config();

const express = require("express");
const axios = require('axios');
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT; // 3000

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// Server static files
// app.use(express.static(__dirname + '/public'));
app.use("/", require("./AxiosNodeHtml"));

app.get("/", (req, res) => res.send("Hello World! TESTing EIEIdsdsds"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
