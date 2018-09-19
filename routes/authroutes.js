const express = require("express");
const router = express.Router();

const User = require("../models/User");

const bcrypt = require("bcryptjs");

const bcryptSalt = 10;

const passport = require('passport');


router.get("/signup", (req, res, next) => {
    res.render("userViews/signup");
  });

  router.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const role = req.body.role;
  
    if (username === "" || password === "") {
      req.flash('error', 'please specify a username and password to sign up')
      res.render("userViews/signup", { message: req.flash("error") });
      return;
    }
  
    User.findOne({ username })
    .then(user => {
      if (user !== null) {
        req.flash('error', 'please choose another username')
        res.render("userViews/signup", { message: req.flash("error") });
        return;
      }
  
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
  
      User.create({
          username: username,
          password: hashPass,
          email: email,
          firstName: firstname,
          lastName: lastname,
          role: role
      })
      .then((response)=>{
        res.redirect("/profile");
      })
      .catch((err)=>{
        req.flash('error', 'there was an error creating the username & password')
        res.render("userViews/signup", { message: req.flash("error") });
      })
    })
    .catch(error => {
      next(error)
    })
  });


  router.get('/login', (req, res, next)=>{
      res.render('userViews/login', {message: req.flash('error')})
  })

  router.post('/login', passport.authenticate('local',  {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: true,
    passReqToCallback: true
  }));


  router.get('/logout', (req, res, next)=>{
      req.logout()
    res.redirect('/')
  })




module.exports = router;