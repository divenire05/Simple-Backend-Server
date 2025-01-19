const express = require('express')
const app = express()
const PORT = 8383

app.get('/', (req, res) => {
    res.send('<h1>this is actually a website (html code)</h1><input/>')
})

app.get('/dashboard', (req, res) => {
    console.log('Ohhh now I hit the /dashboard endopint')
    res.send('hi')
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))