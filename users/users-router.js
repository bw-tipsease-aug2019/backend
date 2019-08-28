const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

//get users
router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ loggedInUser: req.user.email, users }); //returning who you're logged in as, because of restricted
    })
    .catch(err => res.send(err));
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

// router.get('/serviceworkers', restricted, (req, res) => {
//   Users.find()
//     .then(users => {
//       res.json({ loggedInUser: req.user.email, users }); //returning who you're logged in as, because of restricted
//     })
//     .catch(err => res.send(err));
// });
module.exports = router;
