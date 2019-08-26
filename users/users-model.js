const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('email', 'password', 'isServiceWorker');
}

function findBy(filter) {
  return db('users').where(filter);
}
function add(user) {
  return db('users')
    .returning('id')
    .insert(user)
    .then(ids => {
      console.log(ids);
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
