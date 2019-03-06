const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const validators = {};

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    validators[file.slice(0, -3)] = require(path.join(__dirname, file));
  });

module.exports = validators;
