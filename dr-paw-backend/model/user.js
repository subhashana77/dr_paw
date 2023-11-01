const sequelizeInstance = require('./../database/sequelise-instance')
const { DataTypes } = require("sequelize");

module.exports = sequelizeInstance.define('post', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    fullName:{
        type: DataTypes.STRING,
        required: true
    },
    profilePic:{
        type: DataTypes.STRING,
        required: true
    },
    contactNumber:{
        type: DataTypes.STRING,
        required: true
    },
    emailAddress:{
        type: DataTypes.STRING,
        required: true
    },
    password:{
        type: DataTypes.STRING,
        required: true
    }
});