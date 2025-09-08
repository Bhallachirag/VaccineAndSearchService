const dotenv = require('dotenv');

dotenv.config();   

module.exports = {
    PORT: process.env.PORT,
    FRONT_END_LINK: process.env.FRONT_END_LINK
}