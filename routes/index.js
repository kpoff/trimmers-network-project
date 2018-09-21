const express = require('express');
const router  = express.Router();

const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get('/', (req, res, next) => {
  let data = {
    layout: false
  }
  res.render('index', data);
});



module.exports = router;
