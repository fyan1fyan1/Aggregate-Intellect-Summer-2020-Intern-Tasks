const express = require("express");
const app = express();
const Knex = require("knex");

const knex = Knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'fullstack_user',
        password: 'f',
        database: 'fullstack'
    }
});

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send({
        name: "Fan",
        email: "yanfan@gmail.com"
    });
});
app.get('/foo', (req, res) => { res.status(200).send("foo") })

app.listen(3100, () => console.log("server started at 3100"));

app.get('/movies', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    knex.select('id', 'title', 'year').from('movies').then((data) => {
        res.status(200).send({ data })
    });

});