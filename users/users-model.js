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
  try {
    const response = await db('users').insert(user);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
