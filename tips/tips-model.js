const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateTips,
  deleteTips,
};

function find() {
  return db('tips as t ')
    .innerJoin('users as u', 'u.id', '=', 't.user_id')
    .select(
      'u.firstName',
      'u.lastName',
      'u.thumbnail',
      'u.company',
      'u.role',
      'u.durationYears',
      'u.durationMonths',
      'u.tagline',
      't.tipAmount',
      't.comment',
    );
}

function findBy(filter) {
  return db('tips').where(filter);
}
function add(tips) {
  return db('tips')
    .returning('id')
    .insert(tips)
    .then(ids => {
      console.log(ids);
      const [id] = ids;
      return findById(id);
    });
}

// function findById(id) {
//   return db('tips')
//     .where({ id })
//     .first();
// }

function findById() {
  return db('users as u ')
    .leftJoin('tips as t', 'u.id', '=', 't.user_id')
    .select(
      'u.email',
      'u.id',
      'u.firstName',
      'u.lastName',
      't.tipAmount',
      't.comment',
    );
}

function updateTips(tips, id) {
  return db('tips')
    .update(tips)
    .where({ id });
}

function deleteTips(id) {
  return db('tips')
    .del()
    .where({ id });
}
