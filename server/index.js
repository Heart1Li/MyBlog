const express = require('express')
const cors = require('cors')
const app =express()
const Router = require('./routes/router')

app.use(cors())
app.use(Router)


app.listen(3000, () => {
  console.log('linstening 3000...')
})