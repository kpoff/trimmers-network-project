const express      = require('express');
const router       = express.Router();
const User         = require('../models/User')
const Job         = require('../models/Job')
const Message     = require('../models/Message')
const ensureLogin  = require("connect-ensure-login");


router.get('/messages/send/:jobID', ensureLogin.ensureLoggedIn('/login'), (req, res, next)=>{
    Job.findById(req.params.jobID).populate('postedBy')
    .then((theJob)=>{
        res.render('messageViews/index', {theJob: theJob, theUser: req.user})
    })
    .catch((err)=>{
        next(err)
    })
});

router.post('/messages/sent/:jobID', (req, res, next)=>{
        Message.create({
            regardingJob: req.params.jobID,
            messageSender: req.user._id,
            messageReceiver: req.body.postedby,
            message: req.body.message
        })
        .then((response)=>{
            //reciver
            const message = response._id;
            User.findByIdAndUpdate(req.body.postedby, {
            $push: {messages: response._id}
            })
            //sender
            .then((response)=>{
            User.findByIdAndUpdate(req.user._id, {
            $push: {messages: message}
            })
                
            .then((response)=>{
            res.redirect('/messages/'+req.user._id)
             })
            .catch((err)=>{
                next(err);
             })
            })
        })
        .catch((err)=>{
            next(err);
        })
        .catch((err)=>{
            next(err)
        })
    })


router.get('/messages/:id', (req, res, next)=>{
    User.findById(req.params.id)
    .populate({
        path:'messages',
        populate:[{
            path: 'regardingJob',
            model: 'Job'
        },
        {
            path: 'messageSender',
            model: 'User'
        },
        {
            path: 'messageReceiver',
            model: 'User'
        }]
    })
    .then((theUser)=>{
        res.render('messageViews/listOfMessages', {theUser: theUser})
        console.log(theUser.messages)
    })
    .catch((err)=>{
        next(err)
    })
});
    
   


module.exports = router;