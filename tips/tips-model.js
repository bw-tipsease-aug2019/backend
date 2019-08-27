const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('tips').select(
    'companyName',
    'serviceWorkerName',
    'tipAmount',
    'comment',
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

function findById(id) {
  return db('tips')
    .where({ id })
    .first();
}
