const express = require('express')
const User = require('../models/user.model')
const bcrypt = require('bcrypt')


module.exports = function register() {
    const userData = req.body
    User.findOne({
        email: req.body.email
    })
      .then(user => {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        res.status(200).send({ status: user.email + ' Registered'})
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            })
                
        } else {
            res.status(401).send('User already exists')
        }
      })
      .catch(err => {
          res.send('error: ' + err)
      })
}
