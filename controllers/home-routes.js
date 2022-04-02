const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// GET posts for the homepage
router.get('/', (req, res) => {
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
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET the single-post page for a post
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_content',
            'title',
            'created_at'
        ],
        include: [
            {
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
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            // serialize the data
            const post = dbPostData.get({ plain: true });
            

            // pass data to template
            res.render('single-post', { 
                // When we pass the 'post' object into the partials, we don't pass the object as is, but rather pass in all of the properties of that object
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET login.handlebars rendered
router.get('/login', (req, res) =>{
    if (req.session.loggedIn) {
        // important for redirecting
        res.redirect('/');
        return;
    }
    res.render('login');
})

router.get('/signup', (req, res) =>{
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
})

module.exports = router;