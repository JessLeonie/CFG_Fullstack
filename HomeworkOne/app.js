const express = require('express')
const app = express()
const port = 3000
app.use(express.static('calculator'));

app.get('/', (req, res) => {
    res.sendFile('calculator/index.html', {root: __dirname});
})

app.listen(port, () => {
    console.log(`Calculator app listening on port ${port}`);
})
