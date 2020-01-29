const express = require('express');
const morgan = require('morgan')
const app = express();
const port = 4000;
const connection = require('./conf');
const bodyParser = require('body-parser');
const route = require("./routes/index")

// morgan error support
app.use(morgan('dev'))
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/playlist", route.playlist)

app.use("/track", route.track)

app.get('/', (req, res) => {
    res.send("Bienvenue chez musicman").status(200)
})


app.listen(port, (err) => console.log(`Server is listening on ${port}`))