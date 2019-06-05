const bcrypt = require('bcrypt')
const User = require('../database/models/User')

module.exports = (req, res) => {
  const { email, password } = req.body;

  // try to find the user
  User.findOne({ email }, (error, user) => {
    if (user) {
      // compare passwords.
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          // store user session.
          
           req.session.userId=user._id
           req.session.username=user.name
            //return req.session.userId
          res.redirect('/')
        } else {
          res.redirect('/')
        }
      })
    } else { 
      return res.redirect('/')
    }
  })
}