const express = require('express')
const cors = require('cors')
require('dotenv').config()
const multer = require('multer')
const app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html')
})




const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
})
