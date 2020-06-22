const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json(fnJsonMessage(req.query.n)))

//add number request of n to get expression result: e.x. '/?n=1'
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//function create message displaying results
function fnJsonMessage(input){
    //transfer input into number value
    inputValue = Number(input);
    let result = getFnResult(inputValue);
    jsonMessage = 'at n = '+input+', f(n) = n+1 = '+result;
    return jsonMessage;
}

//function caculates f(n) = n+1
function getFnResult(input){
    n = input+1.0;
    return n;
}
