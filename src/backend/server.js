const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


app.use(express.json())

app.get('/bcrypt', (req, res) => {
  const saltRounds = 10;
  const myPlaintextPassword = ';alkjf;aldifjaodi';
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
      // Store hash in your password DB.
      console.log('bcrypt hash:', hash)
      res.send('you have been bcrypted, mate')
    });
  });
})



// app.get('/login', (req, res) => {
//   //  authenticate user 
//   // const username = req.body.username
//   // const user = { name: username }
//   const user = { name: 'maciek' }

//   // jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, null, (err, jwt) => {
//   //   console.log(jwt)
//   //   res.json({ jwt })
//   // })

//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//   res.json(accessToken)

// })

const port = 4000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
