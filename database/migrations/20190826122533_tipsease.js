exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl
        .string('email', 128)
        .notNullable()
        .unique();
      tbl.string('password', 128).notNullable();
      tbl.string('cPassword', 128);
      tbl
        .boolean('isServiceWorker')
        .notNullable()
        .defaultTo(false);
    })
    //check float,text,and one to many relationship w/users tbl
    .createTable('tips', tbl => {
      tbl.increments();
      tbl
        .string('companyName', 128)
        .notNullable()        
      tbl.string('serviceWorkerName', 128).notNullable();
      tbl.string('tipAmount', 128);
      tbl.text('comment', 128);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
