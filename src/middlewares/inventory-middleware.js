const { ClientErrorCodes } = require('../utils/error-codes');

const validateCreateInventory = (req, res, next) => {
    if(
        !req.body.batchNumber ||
        !req.body.quantity ||
        !req.body.expiryDate ||
        // !req.body.price ||
        !req.body.vaccineId
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body to create a Vaccine',
            err: 'Missing mandatory properties to create a Vaccine'
        });
    }

    next();
}

module.exports = {
    validateCreateInventory
}