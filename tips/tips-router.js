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

//add new tip
router.post('/add', (req, res) => {
  let tips = req.body;
  // const hash = bcrypt.hashSync(user.password, 10);
  // user.password = hash;

  Tips.add(tips)
    .then(newTips => {
      res.status(201).json(newTips);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
