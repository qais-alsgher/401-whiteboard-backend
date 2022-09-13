`use strict`;
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const Post = require('./post.model');
const Commint = require('./commint.model');
const collection = require('../collections/use-comment-routes');
const POSTGRES_URL = process.env.DATABASE_URL;

const sequelizeOption = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
};

const sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

const postModel = Post(sequelize, DataTypes);
const commintModel = Commint(sequelize, DataTypes);
// one to many relation one post have many commint 
// to poenter post to have many commmint 
postModel.hasMany(commintModel, { foreignKey: 'postId', sourceKey: 'id' });
// to know the connint that related specific post  
commintModel.belongsTo(postModel, { foreignKey: 'postId', targetKey: 'id' });

const postCollection = new collection(postModel);
const commintCllection = new collection(commintModel);


module.exports = {
    db: sequelize,
    Post: postCollection,
    Commint: commintCllection,
    commintModel: commintModel
}