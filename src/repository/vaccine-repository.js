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
            // const vaccine = await Vaccine.update(data, {
            //     where: {
            //         id: vaccineId
            //     }
            // });
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

    async getAllVaccines() {
        try {
            const vaccines = await Vaccine.findAll();
            return vaccines;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = VaccineRepository;
