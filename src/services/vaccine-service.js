const { VaccineRepository } = require('../repository/index');

class VaccineService {
    constructor(){
        this.vaccineRepository = new VaccineRepository();
    }

    async createVaccine(data) {
        try {
            const vaccine = await this.vaccineRepository.createVaccine(data);
            return vaccine;
        } catch (error) {
            throw error;
        }
    }

    async deleteVaccine(vaccineId) {
        try {
            const response = await this.vaccineRepository.deleteVaccine(vaccineId);
            return response;
        } catch (error) {
            throw error;
        }
    }   

    async updateVaccine(vaccineId, data) {
        try {
            const vaccine = await this.vaccineRepository.updateVaccine(vaccineId, data);
            return vaccine;
        } catch (error) {
            throw error;
        }
    }

    async getVaccine(vaccineId) {
        try {
            const vaccine = await this.vaccineRepository.getVaccine(vaccineId);
            return vaccine;
        } catch (error) {
            throw error;
        }
    }

    async getAllVaccines() {
        try {
            const vaccines = await this.vaccineRepository.getAllVaccines();
            return vaccines;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = VaccineService;