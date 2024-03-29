//Install express server
const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 8080

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Web-Shop'))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/Web-Shop/index.html'))
})

// Start the app by listening on the default Heroku port
app.listen(port)

console.log('App started on port:', port)
