exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", function(table) {
        table.increments().primary();
        table.string("user_id").notNullable().defaultTo('');
        table.string("password").notNullable().defaultTo('');
        table.string("full_name").notNullable().defaultTo('');
        table.string("phone").notNullable().defaultTo('');
        table.string("email").notNullable().defaultTo('');
        table.string("address").notNullable().defaultTo('');
        table.string("city").notNullable().defaultTo('');
        table.string("state").notNullable().defaultTo('');
        table.string("zip").notNullable().defaultTo('');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
