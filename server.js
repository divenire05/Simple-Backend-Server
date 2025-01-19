const express = require('express')
const app = express()
const PORT = 8383

app.get('/', (req, res) => {
    console.log('Yay I hit an endpoint', req.method)
    res.sendStatus(201)
})

app.get('/dashboard', (req, res) => {
    console.log('Ohhh now I hit the /dashboard endopint')
    res.send('hi')
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))