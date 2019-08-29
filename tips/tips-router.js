const router = require('express').Router();

const Tips = require('./tips-model.js');
const restricted = require('../auth/restricted-middleware.js');

//get tips
router.get('/', (req, res) => {
  Tips.find()
    .then(tips => {
      // res.json({ loggedInUser: req.user.email, tips });
      res.json(tips);
    })
    .catch(err => res.send(err));
});

//get tips by id

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Tips.findById(id)
    .then(tip => {
      res.status(200).json(tip);
    })
    .catch(err => {
      res.status(500).json({ message: 'Could not get tip' });
    });
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
