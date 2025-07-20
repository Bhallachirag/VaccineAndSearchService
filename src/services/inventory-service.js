const InventoryRepository = require('../repository/inventory-repository');

class InventoryService {
    constructor() {
        this.inventoryRepository = new InventoryRepository();
    }

    async createInventory(data) {
        try {
            const inventory = await this.inventoryRepository.createInventory(data);
            return inventory;
        } catch (error) {
            console.log("Something went wrong in service layer - createInventory");
            throw error;
        }
    }

    async getInventory(id) {
        try {
            const inventory = await this.inventoryRepository.getInventoryById(id);
            return inventory;
        } catch (error) {
            console.log("Something went wrong in service layer - getInventory");
            throw error;
        }
    }

    async getAllInventories() {
        try {
            const inventories = await this.inventoryRepository.getAllInventories();
            return inventories;
        } catch (error) {
            console.log("Something went wrong in service layer - getAllInventories");
            throw error;
        }
    }

    async updateInventory(id, data) {
        try {
            const updatedInventory = await this.inventoryRepository.updateInventory(id, data);
            return updatedInventory;
        } catch (error) {
            console.log("Something went wrong in service layer - updateInventory");
            throw error;
        }
    }

    async deleteInventory(id) {
        try {
            const deleted = await this.inventoryRepository.deleteInventory(id);
            return deleted;
        } catch (error) {
            console.log("Something went wrong in service layer - deleteInventory");
            throw error;
        }
    }

      async getInventoriesByVaccineId(vaccineId) {
        try {
            const inventories = await this.inventoryRepository.getInventoriesByVaccineId(vaccineId);
            return inventories;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = InventoryService;