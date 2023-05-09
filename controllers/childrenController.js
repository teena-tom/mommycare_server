const knexConfig = require("../knexfile");
const knex = require("knex");
const db = knex(knexConfig);
const { v4 } = require("uuid");

module.exports.getAll = (_req, res) => {
  db.select("*").from("mommycare");
  db("childdetails")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving children: ${err}`));
};

//get a child details from the table based on id.
module.exports.getChild = (req, res) => {
  const id = req.params.id;
  db("childdetails")
    .where({ "childdetails.id": id })
    .join("daycares", { "daycares.id": "daycares_id" })
    .select(
      "childdetails.id",
      "daycare_name",
      "childdetails.child_name",
      "childdetails.address",
      "childdetails.city",
      "childdetails.guadian_name",
      "childdetails.contact_phone",
      "childdetails.contact_email",
    )
    .then((rows) => {
      if (rows.length > 0) {
        res.status(200).json(rows[0]); // Return the first row in the response
      } else {
        res.status(404).send("Item not found"); // Return a 404 error if no rows are returned
      }
    })
    .catch((error) => {
      res.status(400).send(`Error retrieving child details: ${error}`);
    });
};

module.exports.updateChild = async (req, res) => {
  const { id } = req.params;

  try {
    const numUpdates = await db("childdetails").where({ id }).update(req.body);
    if (numUpdates > 0) {
      const chils = await db("childdetails").where({ id });
      res.json(child[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

//register new child
module.exports.registerNewChild = (req, res) => {
  const { daycares_id, child_name, address, city, guadian_name, contact_email, contact_phone, username, password } = req.body;

  // Validate the request body
  if (!daycares_id || !child_name || !address || !guadian_name || !contact_email || !contact_phone || !username || !password) {
    return res.status(400).send("Error: missing required fields");
  }

  const id = v4();
  const newChild = { id, daycares_id, child_name, address, city, guadian_name, contact_email, contact_phone, username, password };

  // Insert the new child into the database
  db('childdetails').insert(newChild)
    .then(() => {
      // Get the newly registered child and send it back in the response
      db('childdetails').where({ id }).first()
        .then((data) => res.status(201).json(data))
        .catch((err) => res.status(500).send("Error: unable to retrieve new child"));
    })
    .catch((err) => res.status(500).send("Error: unable to register new child"));
};
module.exports.updateChild = async (req, res) => {
  const { id } = req.params;

  try {
    const numUpdates = await db("childdetails").where({ id }).update(req.body);
    if (numUpdates > 0) {
      const child = await db("childdetails").where({ id });
      res.json(child[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

//remove an existing child from childdetails table

module.exports.removeChild = (req, res) => {
  const id = req.params.id;
  db.select("*").from("mommycare").where("id", "=", id);
  db("childdetails")
    .where({ id })
    .del()
    .then((data) => {
      if (data > 0) {
        res.send("Successfully Removed");
      } else res.status(404).send("Error in removing child");
    })
    .catch((err) => res.status(400).send(`Error in removing child: ${err}`));
};


