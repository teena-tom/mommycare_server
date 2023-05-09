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
<<<<<<< HEAD
    .catch((err) =>
      res.status(400).send(`Error retrieving Daycares: ${err}`)
    );
=======
    .catch((err) => res.status(400).send(`Error retrieving Daycares: ${err}`));
>>>>>>> feature/routes
};

//Get  a specific daycare details
module.exports.getDaycare = (req, res) => {
  const id = req.params.id;
  db("daycares")
    .where({ id })
    .then((rows) => {
      if (rows.length > 0) {
        res.status(200).json(rows[0]); // Return the first row in the response
      } else {
        res.status(404).send("Item not found"); // Return a 404 error if no rows are returned
      }
    })
    .catch((error) => {
      res.status(400).send(`Error retrieving the Daycare: ${err}`);
    });
<<<<<<< HEAD
};
=======
};
>>>>>>> feature/routes
