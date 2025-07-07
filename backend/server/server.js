import express from 'express'
const PORT = 3005
const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log('listening on port 3000')
})
