`use strict`;
const Comment = (sequelize, DataTypes) => sequelize.define('comment', {
    commentAuther: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commentContent: {
        type: DataTypes.STRING,
        defaultValue: " ",
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


});

module.exports = Comment;