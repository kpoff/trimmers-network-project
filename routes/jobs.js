const express      = require('express');
const router       = express.Router();
const Job        = require('../models/Job')
const User        = require('../models/User')
const ensureLogin  = require("connect-ensure-login");
const Message     = require('../models/Message')


/* GET home page */
router.get('/jobs', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
    Job.find()
    .then((theJobs)=>{
        res.render('jobViews/index', {theJobs: theJobs})
    })
    .catch((err)=>{
        next(err)
    })
});

router.get('/jobs/new', (req, res, next)=>{
  if(!req.user){
      res.redirect('/')
      return
  }
  res.render('jobViews/create');

});


router.post('/jobs/create', (req, res, next)=>{

  Job.create({
    jobTitle: req.body.title,
    numberOfTrimmers: req.body.numberworkers,
    duration: req.body.duration,
    location: req.body.location,
    payRate: req.body.payrate,
    accommodations: req.body.accommodations,
    travelInfo: req.body.travel,
    notes: req.body.notes,
    postedBy: req.user._id
  })
  .then((response)=>{
    User.findByIdAndUpdate(req.user._id, {
    $push: {jobListings: response._id}
    })
    .then((response)=>{
      res.redirect('/jobs')
    })
    .catch((err)=>{
      next(err);
    })
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/jobs/:id', (req, res, next)=>{
  Job.findById(req.params.id).populate('postedBy')
  .then((theJob)=>{
      res.render('jobViews/detail', {theJob: theJob})
  })
  .catch((err)=>{
      next(err);
  })
});


module.exports = router;
