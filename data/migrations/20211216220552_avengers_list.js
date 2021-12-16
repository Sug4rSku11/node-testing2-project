
exports.up = function(knex) {
  return knex.schema.createTable('avengers_list', tbl => {
      tbl.increments()
      tbl.string('name', 20)
         .unique()
         .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('avengers_list')
};
