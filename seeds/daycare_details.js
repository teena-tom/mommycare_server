/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('daycares').del()
  await knex('daycares').insert([
    {id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9', 
    daycare_name: 'Morning Bells',
    address:'1234 45avenue, BC',
    city:'Delta',
    contact_name:'Ben',
    contact_position:'Manager',
    contact_email:'ben@gmail.com',
    contact_phone:'2345678901',
    max_limit_of_children:'5',
    status:'4',
    username:'ben',
    password:'12345'
},
    
  ]);
};
