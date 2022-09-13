`use strict`;
const Post = (sequelize, DataTypes) => sequelize.define('Post', {
    postAouthr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postContent: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Post;