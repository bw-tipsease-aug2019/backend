const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('username', 'password', 'isServiceWorker');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      console.log(ids.rows);
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
