const express = require('express');

const { InventoryMiddlewares } = require('../../middlewares/index');

const VaccineController = require('../../controllers/vaccine-controller');
const inventoryController = require('../../controllers/inventory-controller');

const router = express.Router();

router.post('/vaccine', VaccineController.create);
router.delete('/vaccine/:id', VaccineController.destroy);
router.get('/vaccine/:id', VaccineController.get);
router.get('/vaccine', VaccineController.getAll);
router.patch('/vaccine/:id', VaccineController.update);

router.get('/vaccine/:id/inventories', inventoryController.getByVaccineId);

router.patch('/vaccine/:id/inventories/add', inventoryController.addInventory); // Admin


router.post(
    '/inventory', 
    InventoryMiddlewares.validateCreateInventory,
    inventoryController.create
);
router.delete('/inventory/:id', inventoryController.destroy);
router.put('/inventory/:id', inventoryController.update);
router.get('/inventory/:id', inventoryController.get);
router.get('/inventories', inventoryController.getAll);
router.patch('/vaccine/:id/inventories', inventoryController.updateByVaccineId);


module.exports = router;    