const knexConfig = require("../knexfile");
const knex = require("knex");
const db = knex(knexConfig);
const { v4 } = require("uuid");

module.exports.getAll = (_req, res) => {
  db.select("*").from("mommycare");
  db("daycares")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Daycares: ${err}`)
    );
};