const router = require('express').Router();

const Tips = require('./tips-model.js');
const restricted = require('../auth/restricted-middleware.js');

//get tips
router.get('/', restricted, (req, res) => {
  Tips.find()
    .then(tips => {
      res.json({ loggedInUser: req.user.email, tips }); //returning who you're logged in as, because of restricted
    })
    .catch(err => res.send(err));
});

module.exports = router;
