const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const n = Number(req.query.n);
    const result = getFnResult(n);
    res.header({"Access-Control-Allow-Origin": "*"});
    res.json({ result: result });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


function getFnResult(input){
    n = input+1.0;
    return n;
}