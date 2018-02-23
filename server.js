const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.headers));
    console.log(req.body)
    res.send('OK')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})