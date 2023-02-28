const express = require("express")
const cors = require('cors')
const http = require('http')

require('./database/indexDB')

//const dbConnection = require('./config/db')
const app = express()
//dbConnection()

app.use(express.json())
app.use(cors())

const languagesRoutes = require('./api/routes/languagesRoutes')
const usersRoutes = require('./api/routes/usersRoutes')

app.use(languagesRoutes)
app.use(usersRoutes)

app.set('url', 'http://localhost:');
app.set('port', 3015);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Server started on '+ app.get('url') + app.get('port'))
})

module.exports = app

