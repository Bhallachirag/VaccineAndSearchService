const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT, FRONT_END_LINK } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');

const setupAndStartServer = async () => {

    const app = express();

    app.use(cors({
        origin: (origin, callback) => callback(null, true),
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token']
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server is running on ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({ alter: true });   
        }
    });
}

setupAndStartServer();