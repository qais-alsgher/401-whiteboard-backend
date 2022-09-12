`use strict`;
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const message = require('./post.model');
const POSTGRES_URL = process.env.DATABASE_URL;
// const sequelize = new Sequelize('postgres', 'qais', '0000', {
//     host: 'localhost',
//     dialect: 'postgres',
//     dialectOptions: {
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             }
//         }
//     }
// });


const sequelizeOption = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

module.exports = {
    db: sequelize,
    Message: message(sequelize, DataTypes)
}