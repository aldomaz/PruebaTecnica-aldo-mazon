const express = require('express');
const { sequelize } = require('../database/config');
const cors = require('cors');
const bodyParser = require('body-parser')

class Server{
    constructor(){
        this.app = express();
        this.port = 3001; 

        this.path = {
            products: '/api/products',
        }

        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Puerto: ${this.port}`);
        });
    }

    routes(){
        this.app.use(this.path.products, require('../routes/products'));
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    async dbConnection(){
        try {
            // await sequelize.sync();
            await sequelize.authenticate();
        } catch (error) {
            console.error('No se pudo conectar a DB:', error);
        }
    }
}

module.exports = Server