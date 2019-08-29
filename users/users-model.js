const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateUsers,
  deleteUsers,
  findSW,
  findTP,
};

function find() {
  return (
    db('users as u ')
      // .leftJoin('tips as t', 'u.id', '=', 't.user_id')
      .select(
        'u.email',
        'u.password',
        'u.isServiceWorker',
        'u.id',
        'u.firstName',
        'u.lastName',
        'u.thumbnail',
        'u.company',
        'u.role',
        'u.durationYears',
        'u.durationMonths',
        'u.tagline',
      )
  );
}

function findSW() {
  return (
    db('users as u ')
      // .leftJoin('tips as t', 'u.id', '=', 't.user_id')
      .select(
        'u.email',
        'u.password',
        'u.isServiceWorker',
        'u.id',
        'u.firstName',
        'u.lastName',
        'u.thumbnail',
        'u.company',
        'u.role',
        'u.durationYears',
        'u.durationMonths',
        'u.tagline',
      )
      .where('isServiceWorker', 1)
  );
}

function findTP() {
  return (
    db('users as u ')
      // .leftJoin('tips as t', 'u.id', '=', 't.user_id')
      .select(
        'u.email',
        'u.password',
        'u.isServiceWorker',
        'u.id',
        'u.firstName',
        'u.lastName',
        'u.thumbnail',
        'u.company',
        'u.role',
        'u.durationYears',
        'u.durationMonths',
        'u.tagline',
      )
      .where('isServiceWorker', 0)
  );
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
function updateUsers(users, id) {
  return db('users')
    .update(users)
    .where({ id });
}

function deleteUsers(id) {
  return db('users')
    .del()
    .where({ id });
}
