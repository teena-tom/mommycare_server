/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('daycares', (table) => {
        table.uuid('id').primary();
        table.string('daycare_name').notNullable();
        table.string('address').notNullable();
        table.string('city').notNullable();        
        table.string('contact_name').notNullable();
        table.string('contact_position').notNullable();
        table.string('contact_email').notNullable();
        table.string('contact_phone').notNullable();
        table.string('max_limit_of_children').notNullable();
        table.string('status').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('daycares');
};
