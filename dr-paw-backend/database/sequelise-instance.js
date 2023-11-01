const { Sequelize } = require('sequelize');
const constants = require("./../const/constent");
const express = require("express");
const app = express();

// check if the port connected or not
app.listen(3000, ()=> {
    console.log("Port CONNECTED!");
});

// connect and export the database connectio
const sequelize = new Sequelize(constants.MYSQL_CONNECTION_STRING);
module.exports = sequelize;

// check the database connection is established or not
try {
    sequelize.authenticate().then(r => {
        console.log("Connection has been established SUCCESSFULLY!");
    });
} catch (error) {
    console.error("Unable to connect to the database", error);
}