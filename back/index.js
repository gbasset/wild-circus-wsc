const express = require('express');
const morgan = require('morgan')
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const route = require("./routes/index")
const cors= require("cors")
app.use(cors())
// morgan error support
app.use(morgan('dev'))
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/spectacle", route.spectacle)

app.use("/representation", route.representation)

app.use("/team", route.team)

app.use("/image", route.image)

app.use("/sujet", route.sujet)

app.use("/messages", route.messages)

app.use('/authentification', route.authentification)

app.use("/user", route.user)

app.get('/', (req, res) => {
    res.send("Bienvenue chez Wild circus").status(200)
})


app.listen(port, (err) => console.log(`Server is listening on ${port}`))