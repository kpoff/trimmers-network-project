const express      = require('express');
const router       = express.Router();
const User         = require('../models/User')
const ensureLogin  = require("connect-ensure-login");
const uploadCloud = require('../config/cloudinary');



/* GET home page */
router.get('/profile', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
    User.findById(req.user._id)
    .then((theUser)=>{
        res.render('userViews/profile', {theUser: theUser})
    })
    .catch((err)=>{
        next(err)
    })
});

router.get('/profile/edit/:userID', (req, res, next) => {
    User.findById(req.params.userID)
    .then((theUser)=>{
        res.render('userViews/edit', {theUser: theUser})
    })
    .catch((err)=>{
        next(err)
    })
});

router.post('/profile/update/:userID', (req, res, next)=>{
    User.findByIdAndUpdate(req.params.userID, {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email
    })
    .then((response)=>{
        res.redirect('/profile')
    })
    .catch((err)=>{
        next(err)
    })
})

router.get('/profile/photo/:userID', (req, res, next) => {
    User.findById(req.params.userID)
    .then((theUser)=>{
        res.render('userViews/addphoto', {theUser: theUser})
    })
    .catch((err)=>{
        next(err)
    })  
  });

router.post('/profile/photo/:userID', uploadCloud.single('photo'), (req, res, next)=>{

    User.findByIdAndUpdate(req.params.userID, {
        imgPath: req.file.url,
        imgName: req.file.originalname
    })
    .then((response)=>{
        res.redirect('/profile')
    })
    .catch((err)=>{
       next(err);
    })
});











module.exports = router;