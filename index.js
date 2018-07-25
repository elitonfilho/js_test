const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bookRouter = require('./bookRouter')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from book-api!')
})

app.use('/books', bookRouter)

app.listen(8080, () => {
    console.log('book-api running at localhost:8080')
})
