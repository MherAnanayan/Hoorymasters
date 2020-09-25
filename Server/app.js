const express  = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes.js'))

const PORT = config.get('port') || 5000


async function start () {
try {
 await mongoose.connect(
     config.get('mongoUrl'),
 {
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useCreateIndex:true
 }
 )
    app.listen(PORT, () => console.log(`app has bean started on port ${PORT}!!!`))
} catch(e) {
console.log('server error', e.message)
process.exit(1)
}
}

start()

