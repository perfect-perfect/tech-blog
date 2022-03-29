const router = require('express').Router();

const apiRoutes = require('./api')

// error
router.use('/api', apiRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

//  - much like the API folder's index.js file that collects the endpoints and prefixes them
//      - here we are collecting the packaged group of API endpoints and prefixing them with the path /api
//      - also not the second use of 'router.use()'.
//          - this is so if we make a request to any endpoint that doesn't exist we'll receive a 404 error
//  - Now when we import routes to 'server.js' they'll already be pacaged and ready to go