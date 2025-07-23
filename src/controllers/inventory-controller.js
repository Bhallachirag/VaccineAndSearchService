const { InventoryService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const inventoryService = new InventoryService();

const create = async (req, res) => {
    try {
        const inventoryRequestData = {
                batchNumber: req.body.batchNumber,
                expiryDate: req.body.expiryDate,
                quantity: req.body.quantity,
                vaccineId: req.body.vaccineId,
                price: req.body.price
            }
        const inventoryItem = await inventoryService.createInventory(inventoryRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: inventoryItem,
            success: true,
            message: "Inventory item created successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create inventory item",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await inventoryService.deleteInventory(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Inventory item deleted successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete inventory item",
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await inventoryService.updateInventory(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Inventory item updated successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update inventory item",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const inventoryItem = await inventoryService.getInventory(req.params.id);
        return res.status(200).json({
            data: inventoryItem,
            success: true,
            message: "Inventory item retrieved successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get inventory item",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const inventoryItems = await inventoryService.getAllInventories(req.query);
        return res.status(SuccessCodes.OK).json({
            data: inventoryItems,
            success: true,
            message: "All inventory items retrieved successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get inventory items",
            err: error
        });
    }
}

const getByVaccineId = async (req, res) => {
    const vaccineId = req.params.id;
    try {
        const inventories = await inventoryService.getInventoriesByVaccineId(vaccineId);

        return res.status(200).json({
            success: true,
            data: inventories,
            message: `Inventories for vaccine ID ${vaccineId} fetched successfully`,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: error
        });
    }
};

const updateByVaccineId = async(req, res) => {
        try {
            const vaccineId = req.params.id;
            const quantity = req.body.quantity;

            console.log("Vaccine ID:", vaccineId);
            console.log("Quantity to deduct:", quantity);

            const updatedInventory = await inventoryService.updateInventoryByVaccineId(vaccineId, req.body.quantity);
            return res.status(200).json({
                success: true,
                message: 'Successfully updated inventory quantity',
                data: updatedInventory,
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
                data: {},
                err: error
            });
        }
    }   

// inventory-controller.js
const addInventory = async (req, res) => {
  try {
    const  vaccineId  = req.params.id;
    const  quantityToAdd  = req.body.quantity;

    const response = await inventoryService.addInventoryByVaccineId(vaccineId, quantityToAdd);

    return res.status(200).json({
      success: true,
      message: "Inventory updated successfully",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: {},
      err: error.message,
    });
  }
};



module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
    getByVaccineId,
    updateByVaccineId,
    addInventory
};
