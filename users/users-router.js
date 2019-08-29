const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

//get users
router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      users.map(user => {
        if (user.isServiceWorker === 0) {
          user.isServiceWorker = false;
        } else if (user.isServiceWorker === 1) {
          user.isServiceWorker = true;
        }
      });
      // res.json({ loggedInUser: req.user.email, users });
      res.json(users);
    })
    .catch(err => res.send(err));
});

//get just serviceworkers
router.get('/workers', (req, res) => {
  Users.findSW()
    .then(users => {
      users.map(user => {
        if (user.isServiceWorker === 0) {
          user.isServiceWorker = false;
        } else if (user.isServiceWorker === 1) {
          user.isServiceWorker = true;
        }
      });
      // res.json({ loggedInUser: req.user.email, users });
      res.json(users);
    })
    .catch(err => res.send(err));
});

//get just tippers
router.get('/tippers', (req, res) => {
  Users.findTP()
    .then(users => {
      users.map(user => {
        if (user.isServiceWorker === 0) {
          user.isServiceWorker = false;
        } else if (user.isServiceWorker === 1) {
          user.isServiceWorker = true;
        }
      });
      // res.json({ loggedInUser: req.user.email, users });
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: 'Could not get user' });
    });
});

router.put('/:id', (req, res) => {
  const users = req.body;
  const { id } = req.params;
  Users.updateUsers(users, id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'Could not update that user in the db' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Users.deleteUsers(id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Could not delete that user from the db' });
    });
});

module.exports = router;
