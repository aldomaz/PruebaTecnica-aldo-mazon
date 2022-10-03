const Products = require("../models/products");

const addProducts = async (req, res) => {
    
    const {
        name,
        category,
        province,
        city,
        pricenoiva,
        totalprice,
        discount,
        discountpercentage,
        stock,
        state
    } =  req.body;

    await Products.create({
        name,
        category,
        province,
        city,
        pricenoiva,
        totalprice,
        discount,
        discountpercentage,
        stock,
        state
    });

    res.status(200).json({
        ok: true,
        msg: 'Provincia Creada'
    });
}

module.exports ={
    addProducts
}