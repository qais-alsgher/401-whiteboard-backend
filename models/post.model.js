`use strict`;
const Message = (sequelize, DataTypes) => sequelize.define('Message', {
    messageAouthr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    messageContent: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Message;