const express = require('express');
const VaccineController = require('../../controllers/vaccine-controller');

const router = express.Router();

router.post('/vaccine', VaccineController.create);
router.delete('/vaccine/:id', VaccineController.destroy);
router.get('/vaccine/:id', VaccineController.get);
router.get('/vaccine', VaccineController.getAll);
router.patch('/vaccine/:id', VaccineController.update);

module.exports = router;    