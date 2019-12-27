require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const jwt = require('jsonwebtoken')

app.use(express.json())

app.get('/login', (req, res) => {
  //  authenticate user 
  // const username = req.body.username
  // const user = { name: username }
  const user = { name: 'maciek' }

  // jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, null, (err, jwt) => {
  //   console.log(jwt)
  //   res.json({ jwt })
  // })

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json(accessToken)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

