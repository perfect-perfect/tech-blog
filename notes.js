// Create an connect database

//  - CREATE DATABASE
//      - Create a file in the db directory called schema.sql and add the following code to it

DROP DATABASE IF EXISTS tech_blog;

CREATE DATABASE tech_blog;

//      - not let's navigate to the MySQL shell and get the database up and running
//          1. From the root directory, type and press enter
mysql -u root -p
//          2. Enter your MySQL password and press Return again 
//          3. To create the data base, execute the following command
source db/schema.sql
//          4. Ensure that it worked and check the Database
SHOW DATABASES;

//  - CREATE THE DATABASE CONNECTION
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

// Section 13.1.5: Create the User models
//-----------------------------------
// what sort of models will we need?
//  - User
//  - Post
//  - Comment
// Sequelize model class
//  - create our own Javascript classes
//  - define our columns
//  - define date types
//  - define any other rules we need to adhere to 

// Section 13.1.6: Create API Routes for the User model
//------------------------------------------------------
// What is the main reason we would create a class bassed off another
//  - so that class would inherit functionality
//  - Every time we extend a class from the Sequelize 'Model' class
//      -  that new model inherits a number of methods for crud

// Hook Up the Server
// Let's make the 'server.js file now

// Section 13.2.4: Introducing bcyrpt
//------------------------------------

npm install bcrypt

// Section 13.2.6: Create the Login Route for Authentication
//-----------------------------------------------------------

//