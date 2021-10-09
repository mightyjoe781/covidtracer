const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const hostname = '127.0.0.1'
const port = 3000
app.listen(port,hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
