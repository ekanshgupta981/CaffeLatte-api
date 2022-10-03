const ProductModel = require("../models/products");
const product = require("../resources/products.json");
// hello

const productController = {
  addProducts: async (req, res) => {
    try {
      let result = await ProductModel.insertMany(product);
      res.status(200).send({
        status: true,
        message: "Products added successfully",
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  getProducts: async (req, res) => {
    try {
      let result = await ProductModel.find();
      res.status(200).send({
        status: true,
        Products: result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  getProductByID: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findById(id);
      res.status(200).send({
        status: true,
        result: product,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },

  filterProduct: async (req, res) => {
    let { hallmarks, lcost, hcost, categories, sort } = req.body;
    sort = sort ? sort : 1;
    let filterObject = {};
    if (hallmarks) filterObject["hallmark"] = hallmarks;
    if (categories) filterObject["category"] = categories;
    if (lcost && hcost) filterObject["price"] = { $gte: lcost, $lte: hcost };

    try {
      let result = await ProductModel.find(filterObject).sort({
        price: sort,
      });
      res.status(200).send({
        status: true,
        result: result,
      });
    } catch (error) {}
  },
};
module.exports = productController;
