const Users = require('../models/Users');
const fs = require('fs');
const csv = require('fast-csv');
const validator = require('validator');
const { calculateLimitAndOffset, paginate } = require('paginate-info');

module.exports = {
  async store(req, res) {
    const { name, email } = req.body;
    if (validator.isEmail(email) === true) {
      const user = await Users.create({ name, email });
      return res.json(user);
    }
    return res.status(400).json({ message: 'Invalid email error' });
  },

  async clonedb(req, res) {
    let i = 0;
    let buffer = [];
    let j = 0;
    // set the csv file location
    const csvfile = `${__dirname}/../../users.csv`;
    // read objects of csv by rows
    fs.createReadStream(csvfile).pipe(csv.parse({ headers: true })).on('data', (row) => {
      console.log('Total users:', j);
      const newuser = {
        name: row.name,
        email: row.email,
      };
      if (i >= 0 && i < 100000 && j < 9000000) {
        buffer.push(newuser);
      } else if (i === 100000 && j < 9000000) {
        Users.bulkCreate(buffer);
        buffer = [];
        i = 0;
      }
      j += 1;
      i += 1;
    }).then(() => res.status(200).json({ message: `Db cloned with ${j} users` }));
  },

  async showusers(req, res) {
    const users = await Users.findAll({
      where: {
        id: req.params.id,
      },
    });
    return res.json(users);
  },

  async index(req, res) {
    const { id } = req.params;
    const { limit, offset } = calculateLimitAndOffset(id, 20);
    const { rows, count } = await Users.findAndCountAll({ limit, offset });
    const infos = paginate(id, count, rows, 20);
    return res.json({ rows, infos });
  },
};
