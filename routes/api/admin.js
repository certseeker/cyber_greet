const express = require('express');
const router = express.Router();
const adminCtrl = require('../../controllers/api/admin')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', adminCtrl.create);

router.post('/login', adminCtrl.login);

router.get('/check-token', ensureLoggedIn, adminCtrl.checkToken);

module.exports = router