const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");

const Products = sequelize.define('products',{
    productid:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
    category:{
        type: DataTypes.STRING,
    },
    province:{
        type: DataTypes.STRING,
    },
    city:{
        type: DataTypes.STRING,
    },
    pricenoiva:{
        type: DataTypes.FLOAT,
    },
    totalprice:{
        type: DataTypes.FLOAT,
    },
    discount:{
        type: DataTypes.BOOLEAN,
    },
    discountpercentage:{
        type: DataTypes.INTEGER,
    },
    stock:{
        type: DataTypes.INTEGER,
    },
    state:{
        type: DataTypes.STRING,
    }
})

module.exports = Products;