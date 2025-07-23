const { Inventory } = require('../models/index');
const { Vaccine } = require('../models/vaccine'); 


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

   async getInventoriesByVaccineId(vaccineId) {
        try {
            const inventories = await Inventory.findAll({
                where: { vaccineId }
            });
            return inventories;
        } catch (error) {
            throw error;
        }

    }

    async updateByVaccineId(vaccineId, quantityToDeduct) {
    const inventories = await Inventory.findAll({
        where: { vaccineId: vaccineId },
        order: [['expiryDate', 'ASC']] // Optional: deduct from earliest expiry first
    });

    if (!inventories || inventories.length === 0) {
        throw new Error('Inventory not found for the given vaccine ID');
    }

    // Calculate total available stock
    const totalAvailable = inventories.reduce((sum, inv) => sum + inv.quantity, 0);
    if (totalAvailable < quantityToDeduct) {
        throw new Error('Not enough stock in inventory');
    }

    // Deduct from multiple batches
    let remaining = quantityToDeduct;
    for (const inventory of inventories) {
        if (remaining <= 0) break;

        const deduction = Math.min(inventory.quantity, remaining);
        inventory.quantity -= deduction;
        remaining -= deduction;
        await inventory.save(); // Save updated batch
    }

    return true;
}



    async addInventoryByVaccineId(vaccineId, quantityToAdd) {
        const inventory = await Inventory.findOne({ where: { vaccineId } });
        if (inventory) {
            inventory.quantity += quantityToAdd;
            await inventory.save();
            return inventory;
        } else {
            return await Inventory.create({
                vaccineId,
                quantity: quantityToAdd
            });
        }
    }
}

module.exports = InventoryRepository;
