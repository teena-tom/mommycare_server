/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('childdetails', (table) => {
        table.uuid('id').primary();
        table
        .uuid('daycares_id')
        .references('daycares.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('child_name').notNullable();
        table.string('address').notNullable();
        table.string('city').notNullable();        
        table.string('guadian_name').notNullable();
        table.string('contact_email').notNullable();
        table.string('contact_phone').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
       
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('childdetails');
};
