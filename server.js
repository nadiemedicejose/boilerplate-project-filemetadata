const express = require('express')
const cors = require('cors')
require('dotenv').config()
const multer = require('multer')
const upload = multer({})
const app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html')
})

/**
 * You can submit a form that includes a file upload.
 * The form file input field has the name attribute set to 'upfile'.
 * When you submit a file, you receive the file name, type, and size
 * in bytes within the JSON response.
 */
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const { originalname, mimetype, size } = req.file
  res.json({
    name: originalname,
    type: mimetype,
    size
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
})
