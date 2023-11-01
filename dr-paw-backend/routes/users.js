const express = require('express');
const fs = require('fs');
const crypto = require('crypto');

const Users = require('./../model/user');

const mysql_package = require('mysql');
const db_connection = require('./../database/sequelise-instance');

const router = express.Router();

router.post('/register', function (req, res, next) {

  if (req.body) {
    const fullName = req.body.fullName;
    const profilePic = req.body.profilePic;
    const contactNumber = req.body.contactNumber;
    const emailAddress = req.body.emailAddress;
    const password = req.body.password;


  }
});

module.exports = router;
