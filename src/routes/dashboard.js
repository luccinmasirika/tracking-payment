const express = require('express');
const router = express.Router();
const { readAll } = require('../controllors/dashbord');

router.get('/dashboard', readAll);

module.exports = router;
