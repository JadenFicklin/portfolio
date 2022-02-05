const houses = require("./db.json");

module.exports = {
  getHouses: (req, res) => res.status(200).send(houses),
};
