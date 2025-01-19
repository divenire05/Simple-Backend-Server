const express = require('express')
const app = express()
const PORT = 8383

let data = {
    name: 'james'
}

// Type 1 - Website Endpoints

app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1>')
})

app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1>')
})

// Type 2 - API Endpoints (non visual)

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.send(data)
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))