const express = require('express');
const router = express.Router();
const passport = require('../config/passport.js')

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] })
);

router.get('/google/callback',
  passport.authenticate('google'), authSuccess
);

function authSuccess(req, res) {
  res.redirect('/main');
}

module.exports = router;