const { VaccineService } = require('../services/index');

const vaccineService = new VaccineService();

const create = async (req, res) => {
    try {
        const vaccine = await vaccineService.createVaccine(req.body);
        return res.status(201).json({
            data: vaccine,
            success: true,  
            message: "Vaccine created successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create vaccine",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await vaccineService.deleteVaccine(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,  
            message: "Vaccine deleted successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete vaccine",
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await vaccineService.updateVaccine(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,  
            message: "Vaccine updated successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update vaccine",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const vaccine = await vaccineService.getVaccine(req.params.id);
        return res.status(200).json({
            data: vaccine,
            success: true,  
            message: "Vaccine received successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get vaccine",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const vaccines = await vaccineService.getAllVaccines(req.query);
        return res.status(200).json({
            data: vaccines,
            success: true,  
            message: "All Vaccines received successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all vaccines",
            err: error
        });
    }
}

const getVaccinesWithInventory = async (req, res) => {
    try {
        const vaccines = await vaccineService.getVaccinesWithInventory(req.query);
        return res.status(200).json({
            data: vaccines,
            success: true,  
            message: "Vaccines with inventory received successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get vaccines with inventory",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,      
    get,
    getAll,
    getVaccinesWithInventory
}