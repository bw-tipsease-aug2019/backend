exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('firstName', 128);
      tbl.string('lastName', 128);
      tbl.string('role', 128);
      tbl.string('company', 128);
      tbl.string('thumbnail', 128);
      tbl.integer('durationYears', 128);
      tbl.integer('durationMonths', 128);
      tbl.string('tagline', 128);
      tbl
        .string('email', 128)
        .notNullable()
        .unique();
      tbl.string('password', 128).notNullable();
      tbl.string('cPassword', 128);
      tbl.boolean('isServiceWorker').notNullable();
    })
    .createTable('tips', tbl => {
      tbl.increments();
      // tbl.string('firstName', 128);
      // tbl.string('lastName', 128);
      // tbl.string('role', 128);
      // tbl.string('company', 128);
      // tbl.string('thumbnail', 128);
      // tbl.integer('durationYears', 128);
      // tbl.integer('durationMonths', 128);
      // tbl.string('tagline', 128);
      tbl.decimal('tipAmount');
      tbl.text('comment', 128);
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tips').dropTableIfExists('users');
};
