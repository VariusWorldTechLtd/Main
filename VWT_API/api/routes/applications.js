const express = require('express');
const checkRole = require('../middleware/check-role');

const router = express.Router();
const applicationsController = require('../controllers/applications');

router.get('/', checkRole('casino'), applicationsController.applications_get_all);
router.post('/', checkRole('casino'), applicationsController.applications_create);

module.exports = router;
