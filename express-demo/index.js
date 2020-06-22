const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json(fnJsonMessage(req.query.n)))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


function fnJsonMessage(input){
    inputValue = Number(input);
    let result = getFnResult(inputValue);
    jsonMessage = 'at n = '+input+', f(n) = n+1 = '+result;
    return jsonMessage;
}

function getFnResult(input){
    n = input+1.0;
    return n;
}
