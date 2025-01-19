const express = require('express')
const app = express()
const PORT = 8383

let data = {
    name: 'james'
}

// Middleware
app.use(express.json)

// Type 1 - Website Endpoints

app.get('/', (req, res) => {
    res.send(`
        <body style="background:pink; color: blue">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1>')
})

// Type 2 - API Endpoints (non visual)

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
    res.sendStatus(201)
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))