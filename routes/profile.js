const express      = require('express');
const router       = express.Router();
const User         = require('../models/User')
const Job         = require('../models/Job')
const ensureLogin  = require("connect-ensure-login");
const uploadCloud = require('../config/cloudinary');
const Message     = require('../models/Message')



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
        email: req.body.email,
        role: req.body.role,
        username: req.body.username
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

router.get('/profile/joblistings/edit/:jobID', (req, res, next) => {
    Job.findById(req.params.jobID)
    .then((theJob)=>{
        res.render('jobViews/joblistingedit', {theJob: theJob})
    })
    .catch((err)=>{
        next(err)
    })
});

router.post('/profile/joblistings/update/:jobID', (req, res, next)=>{
    Job.findByIdAndUpdate(req.params.jobID, {
        jobTitle: req.body.jobtitle,
        numberOfTrimmers: req.body.numberworkers,
        duration: req.body.duration,
        location: req.body.location,
        payRate: req.body.payrate,
        accommodations: req.body.accommodations,
        travelInfo: req.body.travelinfo,
        notes: req.body.notes
    })
    .then((response)=>{
        res.redirect('/profile/joblistings')
    })
    .catch((err)=>{
        next(err)
    })
})

router.post('/profile/joblistings/delete/:jobID', (req, res, next)=>{
    Job.findByIdAndRemove(req.params.jobID)
    .then((response)=>{
        res.redirect('/profile/joblistings')
    })
    .catch((err)=>{
        next(err)
    })
})

router.get('/profile/joblistings', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
    User.findById(req.user._id).populate('jobListings')
    .then((theUser)=>{
        res.render('jobViews/joblistings', {theUser: theUser})
    })
    .catch((err)=>{
        next(err)
    })
});


















module.exports = router;