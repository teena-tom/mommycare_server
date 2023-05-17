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
};

// //get a daycare from the table based on id.
// module.exports.getDaycare = (req, res) => {
//   const id = req.params.id;
//   db("daycares")
//     .where({ id })
//     .then((rows) => {
//       if (rows.length > 0) {
//         res.status(200).json(rows[0]); // Return the first row in the response
//       } else {
//         res.status(404).send("Item not found"); // Return a 404 error if no rows are returned
//       }
//     })
//     .catch((error) => {
//       res.status(400).send(`Error retrieving daycares: ${err}`);
//     });
// };
module.exports.deleteDaycare = (req, res) => {
  const id = req.params.id;
  db.select("*").from("mommycare").where("id", "=", id);
  db("daycares")
    .where({ id })
    .del()
    .then((data) => {
      if (data > 0) {
        res.send("Successfully Deleted");
      } else res.status(404).send("Error deleting daycare");
    })
    .catch((err) => res.status(400).send(`Error deleting daycare: ${err}`));
};
module.exports.updateDaycare = async (req, res) => {
  const { id } = req.params;

  try {
    const numUpdates = await db("daycares").where({ id }).update(req.body);
    if (numUpdates > 0) {
      const daycare = await db("daycares").where({ id });
      res.json(daycare);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports.createNew = (req, res) => {
  const id = v4();
  const { contact_phone, contact_email } = req.body;
  const phoneRe = /^(\+?\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const phoneTest = phoneRe.test(contact_phone);
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailTest = emailRe.test(contact_email);

  let keys = Object.keys(req.body);
  if (
    keys.includes("daycare_name") &&
    keys.includes("address") &&
    keys.includes("city") &&
    keys.includes("contact_name") &&
    keys.includes("contact_position") &&
    keys.includes("contact_phone") &&
    keys.includes("contact_email") &&
    keys.includes("max_limit_of_children") &&
    keys.includes("status") &&
    keys.includes("username") &&
    keys.includes("password") &&
    phoneTest === true &&
    emailTest === true
  ) {
    db.insert({ ...req.body, id })
      .into("daycares")
      .then((data) => {
        db("daycares")
          .where({ id })
          .then((data) => res.status(201).json(data[0]));
      });
  } else {
    res.status(400).send("Error: invalid request body");
  }
};

module.exports.daycareChildren = (req, res) => {
  console.log(req.params.id);
  db("childdetails")
    .where({ daycares_id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
   
    })
    .catch((err) =>
      res.status(400).send(`Error revieving children: ${err}`)
    );
};
