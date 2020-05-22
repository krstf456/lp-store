const express = require('express')
const User = require('../models/user.model')


module.exports = function register() {
    const userData = req.body
    User.findOne({
        email: req.body.email
    })
      .then(user => {
        if(!user) {
            
        }
      })
}
