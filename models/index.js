const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


// a user can have many posts
User.hasMany(Post, {
    // 'user_id' exists on the Post Model, it is a reference (foreign key) to the User table/object's primary key, the 'id'
    foreignKey: 'user_id'
});

// a post can have one owner/user
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };