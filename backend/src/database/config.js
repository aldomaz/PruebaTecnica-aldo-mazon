const Sequelize = require('sequelize')

const sequelize = new Sequelize(`postgres://xgmktgpmodkhyv:a1760a2653b1bd7a97a527e36153b709f6e67fbc022f37d7323e4b4730aee07a@ec2-52-207-15-147.compute-1.amazonaws.com:5432/d1h84nht10ojh3`, {
    dialectOptions:{
        ssl:{
            require: true,
            rejectUnauthorized: false,
        }
    }
});

module.exports = {
    sequelize
}
