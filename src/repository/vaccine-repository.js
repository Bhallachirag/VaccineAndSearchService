const { Op } = require('sequelize');

const { Vaccine } = require('../models/index');

class VaccineRepository {
    async createVaccine({ name }) {
        try {
            const vaccine = await Vaccine.create({ name });
            return vaccine;
        } catch (error) {
            throw error; 
        }
    }

    async deleteVaccine(vaccineId) {
        try {
            await Vaccine.destroy({
                where: {
                    id: vaccineId
                }
            });
            return true;
        } catch (error) {
            throw error;
        }
    }

    async updateVaccine(vaccineId, data ) {
        try {
            const vaccine = await Vaccine.findByPk(vaccineId);
            vaccine.name = data.name;
            await vaccine.save();
            return vaccine;
        } catch (error) {
            throw error;
        }
    }   

    async getVaccine(vaccineId){
        try {
            const vaccine = await Vaccine.findByPk(vaccineId);
            return vaccine;
        } catch (error) {
            throw error;
        }
    }

    async getAllVaccines(filter) {
        try {
            if(filter.name) {
                const vaccines = await Vaccine.findAll({
                    where: {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return vaccines;
            }
            const vaccines = await Vaccine.findAll();
            return vaccines;
        } catch (error) {
            throw error;
        }
    }

    async getVaccinesWithInventory(filter = {}) {
    try {
        const { Inventory } = require('../models/index');
        
        const whereClause = {};
        if (filter.name) {
            whereClause.name = {
                [Op.iLike]: `%${filter.name}%`
            };
        }

        const vaccines = await Vaccine.findAll({
            where: whereClause,
            include: [{
                model: Inventory,
                where: {
                    quantity: { [Op.gt]: 0 },
                    expiryDate: { [Op.gt]: new Date() }
                },
                required: true,
                order: [['expiryDate', 'ASC']]
            }]
        });
        
        return vaccines;
    } catch (error) {
        throw error;
    }
}
}

module.exports = VaccineRepository;
