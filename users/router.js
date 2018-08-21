const express = require('express');

const config = require('../config');
const Users = require('./models');

const router = express.Router();

module.exports = { Users, router };
