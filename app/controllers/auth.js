const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createJWT } = require("../utils/auth");
const { jwtConfig } = require('../../config.json');
const { validationResult } = require('express-validator');


const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


/**
 * This function comment is parsed by doctrine
 * @route POST /signup
 * @group Login and Register
 * @param {CreateUserDTO.model} user.body.required - the created user
 * @returns {object} 201 - New user is created
 * @returns {Error}  default - Unexpected error
 */
exports.signup = (req, res, next) => {

  //Todo
  //const errors  = validationResult(req)

  
  const {
    firstName,
    lastName,
    email,
    password
  }=req.body;

  const errors = [];

  if (!firstName) {
    errors.push({ firstName: "required" });
  }

  if (!lastName) {
    errors.push({ lastName: "required" });
  }

  if (!email) {
    errors.push({ email: "required" });
  }

  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }

  if (!password) {
    errors.push({ password: "required" });
  }

  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  User.findOne({ email: email }).then(user => {
    if (user) {
      return res.status(422).json({ errors: [{ user: "email already exists" }] });
    } else {
      const user = new User({
        lastName,
        firstName,
        email,
        password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          user.save().then(response => {
            res.status(201).json({
              success: true,
              result: response
            })
          }).catch(err => {
            res.status(500).json({
              errors: [{ error: err }]
            });
          });
        })
      })
    }
  }).catch(err => {
    res.status(500).json({
      errors: [{ error: 'Something went wrong' }]
    });
  })
};


/**
 * This function comment is parsed by doctrine
 * @route POST /signin
 * @group Login and Register
 * @param {LoginDTO.model} login.body.required - login infos
 * @returns {object} 200 - the user is logged 
 * @returns {Error}  default - Unexpected error
 */
exports.signin = (req, res) => {

  const { email, password } = req.body;

  const errors = [];

  if (!email) {
    errors.push({ email: "required" });
  }

  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }

  if (!password) {
    errors.push({ passowrd: "required" });
  }

  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  User.findOne({ email: email }).then(user => {
    if (!user) {
      return res.status(404).json({
        errors: [{ user: "not found" }],
      });
    } else {
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) {
          return res.status(400).json({ errors: [{ password: "incorrect" }] });
        }

        let access_token = createJWT(
          user.email,
          user._id,
          3600
        );

        jwt.verify(
          access_token,
          jwtConfig.secret_token,
          (err, decoded) => {
            if (err) {
              res.status(500).json({ errors: err });
            }
            if (decoded) {
              return res.status(200).json({
                success: true,
                token: access_token,
                message: user
              });
            }
          }
        );
      }).catch(err => {
        res.status(500).json({ errors: err });
      });
    }
  }).catch(err => {
    res.status(500).json({ errors: err });
  });
};