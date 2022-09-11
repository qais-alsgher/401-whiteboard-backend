`use strict`;
const { Sequelize, DataTypes } = require('sequelize');
const message = require('./post.model');
const POSTGRES_URL = "postgres://jcrozxxwgqriwr:c1daf546e42c20bf404a6460e5734e36bb013d43482fa0f0fe8f6d810e0819cc@ec2-107-23-76-12.compute-1.amazonaws.com:5432/dfeqpt1qrehm0q";
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