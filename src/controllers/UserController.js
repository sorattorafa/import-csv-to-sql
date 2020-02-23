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
    let i = 0; // iterator buffer
    let buffer = []; // buffer to .bulkCreate function
    let j = 0; // global iterator
    const csvfile = `${__dirname}/../../users.csv`; // set the csv file location
    // read objects of csv by rows
    await fs.createReadStream(csvfile).pipe(csv.parse({ headers: true })).on('data', (row) => {
      // get user row
      const newuser = {
        name: row.name,
        email: row.email,
      };
      // set buffer
      if (i >= 0 && i < 100000 && j < 9000000) {
        buffer.push(newuser);
      } else if (i === 100000 && j < 9000000) {
        Users.bulkCreate(buffer);
        buffer = [];
        i = 0;
      }
      // next user
      j += 1;
      i += 1;
      // if no users on csv
      if (j === 10000000000) {
        return res.status(200).json({ message: 'Db cloned' });
      }
    });
    return res.status(200).json({ message: 'Db cloning' });
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
    return res.json({ infos, rows });
  },

  async updateuser(req, res) {
    const user = await Users.update(
      { list: req.body.list },
      {
        where: { id: req.params.id },
      },
    );
    if (!user) {
      return res.status(400).json({ message: `Cannot find ${req.params.id}user` });
    }
    const updateduser = await Users.findAll({ where: { id: req.params.id } });
    return res.status(201).json({ updateduser });
  },

};
