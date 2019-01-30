/*  Declare Dependencies  */
import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'

//  Setup Port
const PORT = process.env.PORT || 5000

//  Setup Socket Application
let app = express()
let server = http.Server(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/*  Static Requirements  */
app.use('/Client', express.static(`${ __dirname }/Client/`))

/*  Listen for Requests  */
app.get('/', (req, res) => {
    res.sendFile(`${ __dirname }/Client/index.html`)
})

server.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`)
})