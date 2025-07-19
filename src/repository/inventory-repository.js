const { Inventory } = require('../models/index');

class InventoryRepository {

    async createInventory(data) {
        try {
            const inventory = await Inventory.create(data);
            return inventory;
        } catch (error) {
            console.log("Something went wrong in the repository layer - createInventory");
            throw error;
        }
    }

    async getInventoryById(id) {
        try {
            const inventory = await Inventory.findByPk(id);
            return inventory;
        } catch (error) {
            console.log("Something went wrong in the repository layer - getInventoryById");
            throw error;
        }
    }

    async getAllInventories() {
    try {
        const inventories = await Inventory.findAll({
            include: {
                model: Vaccine,
                attributes: ['id', 'name']
            }
        });
        return inventories;
    } catch (error) {
        console.log("Something went wrong in the repository layer - getAllInventories");
        throw error;
    }
}


    async updateInventory(id, data) {
        try {
            await Inventory.update(data, {
                where: { id: id }
            });
            const updatedInventory = await Inventory.findByPk(id);
            return updatedInventory;
        } catch (error) {
            console.log("Something went wrong in the repository layer - updateInventory");
            throw error;
        }
    }

    async deleteInventory(id) {
        try {
            await Inventory.destroy({
                where: { id: id }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer - deleteInventory");
            throw error;
        }
    }
}

module.exports = InventoryRepository;
