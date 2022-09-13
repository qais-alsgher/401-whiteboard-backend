`use strict`;
const Commint = (sequelize, DataTypes) => sequelize.define('commint', {
    commintAuther: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commintContent: {
        type: DataTypes.STRING,
        defaultValue: " ",
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


});

module.exports = Commint;