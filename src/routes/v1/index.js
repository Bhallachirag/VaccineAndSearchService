const express = require('express');
const VaccineController = require('../../controllers/vaccine-controller');

const router = express.Router();

router.post('/vaccine', VaccineController.create);

module.exports = router;