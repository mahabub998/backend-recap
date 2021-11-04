const express = require('express')
const port =process.env.PORT|| 5000
const contactRoute = require('./api/routes/contacts')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



app.use('/api/contacts',contactRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) 
})