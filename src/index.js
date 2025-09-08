const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db  = require('./models/index');
const { Vaccine, Inventory } = require('./models/index');

const setupAndStartServer = async () => {

    const app = express();

    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server is running on ${PORT}`);
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter: true});   
        // }
    });
}

setupAndStartServer();