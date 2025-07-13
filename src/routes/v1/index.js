const express = require('express');
const VaccineController = require('../../controllers/vaccine-controller');

const router = express.Router();

router.post('/vaccine', VaccineController.create);
router.delete('/vaccine/:id', VaccineController.destroy);
router.patch('/vaccine/:id', VaccineController.update);
router.get('/vaccine/:id', VaccineController.get);


module.exports = router;    