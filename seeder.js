require("dotenv").config();

require("./db");
const Product = require("./model/product_model");

const jsonProduct = require("./product.json");

const start = async () => {
  try {
    await Product.deleteMany();
    await Product.create(jsonProduct);
    console.log("Success");
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();

// to run this file =>
//  $ node filename_of_this i.e $ node seeder
