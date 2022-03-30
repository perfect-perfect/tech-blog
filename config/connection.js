// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();



// declaring a variable as const without setting it equal to a value will throw an error
//  - that is why we use 'let'
let sequelize;

// creates the connectiion to the database depending pn the environemnt
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;