/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("childdetails").del();
  await knex("childdetails").insert([
    {
      id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
      daycares_id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
      child_name: "Evana",
      address: "6745 avenue delta, BC",
      city: "Delta",
      guadian_name: "Alan",
      contact_email: "alan@gmail.com",
      contact_phone: "1233456789",
      username: "alan",
      password: "12345",
    },
  ]);
};
