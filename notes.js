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
const router = require('./controllers');

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

// Section 13.3.4: Create the Post model ( this one wil be a little different from the chapter )
//-----------------------------------------------------------------------------------------------
// GitHub Issues
//  - as a user, i can create a post
//  - as a user, i can retrieve all the posts
//  - as a user, i can retrieve a post by id
//  - as a user, i can update the title and content of a post
//  - as a user, i can delete a post

// Section 13.3.4: Create the Post Model
//---------------------------------------

// Section 13.3.5: Define Model Associations
//--------------------------------------------
// Any time we change a model association we must change the force method to 'true' in the 'server.js'
//  - then the database connection must sync with the new model definitions and associations

// Section 13.3.6: Create API routes for the Post Model
//-------------------------------------------------------

// GET a single post
 router,get('/:id', req, res) => {

}

// Section 13.5.1 (we skipped 13.4 because it was all about vote functionality, which our app does not have)
//-------------------------------------------------------------------------------------------------------------
// The last remaining piece is setting up a 'Comment' model
//  - this will involve something similar to the 'vote' moder
//      - as we need comments to be associated with both a user and a post
// GitHUb Issue:
//  - i can leave a comment on a another user's post
//  - i can leave a comment on another user's post

// Section 13.5.3: Create the Comment Model
//------------------------------------------
// create the model
// next in index.js file add the following associations

// Section 13.5.4: Create the API Routes
//---------------------------------------
// Comments will ultimately be included with the other APIs that you've already set up
//  - but first lets define our own endpoints
//  - create a new file located at 'routes/api/comment-routes.js'

// Section 13.5.5: Update the Routes to Include Comments
//-------------------------------------------------------
// add comments to the post-routes
// add comments to the user-routes

// Section 14.1.3: Set Up the Project
//------------------------------------
// GitHub Issues:

// Create a homepage
//  - I can view all posts in a list
//  - I can see how many comments each article has
//  - I can click on the comment count to route to a different page

// Create a login and signup page
//  - I can visit a login page to create a new account or log into an existing account
//  - I want to stay logged in even if I refresh the page or close the browser tab
//  - I can click a "logout" button for the app to forget me

// Create a single post page
//  - i can view a whole post on a seperate page
//  - as a logged-in user, i can add a comment to an article

// Create a dashboard for logged-in users
//  - as a logged-in user, i can view all of my posts on a seperate dashboard page
//  - as a logged-in user, i can crea new posts via the dashboard
//  - as a logged-in user, i can edit or delete my existing posts

// Add a Style Sheet
//  in the server.js, add the following line at the top of the file

// Section 14.1.4: Set Up the Template Engine
//--------------------------------------------
// To get started with Handlebars.js you first  need to install the correct dependency by typing in the following command

// next you'll need to set up where the template files live
//  - in the 'views/layouts' create a file called 'main.handlebars'
//  - notice the special place holder in the main {{{ body }}}
//      - this is handlebars syntax for data that will be plugged in later
// let's make the homepage now
//  - in the 'views' folder create a file called 'homepage.handlebars

// Your express.js routes take requests, communicate with the Models and will response with a view
//  - create controllers/home-routes.js


// Section 14.1.5: Create the Homepage Template
//----------------------------------------------
































//=====================================================================================
// The homepage
//  - presented with all existing posts that include
//      - post title
//      - date created
// the single-post page
//  - when i click on an exisitng post i am presented with the single-post page
//      - the post title
//      - the post content
//      - the post creator's username
//      - the date the post was created
// the dashboard
//  - presented with any blog posts I have created
//      - when i click on an exisitng post in the dashboard i am taken to the edit/update page
//  - the option to add a new blog post
//      - when i click on the botton to create a new blog post i ( taken to a new Create a post page ) am prompted to enter both
//      - create a post page
//          - the title
//q         - the contents 
//      - when i click on the button to create a new blow post
//          - the title and contens of the post are saved
//          - i am taken back to the updated dashboard with the new blog post
// the edit/update page
//  - delete a post
//  - update a post
//  - after done i am taken back to an updated dashboard