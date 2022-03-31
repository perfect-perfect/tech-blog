const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// homepage route
router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'id',
            'post_content',
            'title',
            'created_at'
        ],
        include: [
            {
                // Note that the included 'Comment' model will also include the 'User' model itself
                //  - so it can attach the username to the comment
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']   
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', { 
                // When we pass the 'post' object into the partials, we don't pass the object as is, but rather pass in all of the properties of that object
                posts
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// login route
router.get('/login', (req, res) =>{
    if (req.session.loggedIn) {
        // important for redirecting
        res.redirect('/');
        return;
    }
})

module.exports = router;