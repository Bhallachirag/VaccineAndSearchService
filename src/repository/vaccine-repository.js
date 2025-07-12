const { Vaccine } = require('../models/index');

class VaccineRepository {
    async createVaccine({ name }) {
        try {
            const vaccine = await Vaccine.create({ name });
            return vaccine;
        } catch (error) {
            throw error; // ✅ Don't re-wrap
        }
    }

    async deleteVaccine(vaccineId) {
        try {
            await Vaccine.destroy({
                where: {
                    id: vaccineId
                }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = VaccineRepository;
