const Product = require("../model/product_model");

exports.getAllProduct = async (req, res) => {
  const { featured, company, name, numericFilter } = req.query;

  // passing all the data into queryObject and work through this!
  const queryObject = {};

  // query featured name i.e searching
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  // query company name i.e searching
  if (company) {
    queryObject.company = company;
  }

  // query name i.e searching
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // price and rating filtering
  if (numericFilter) {
    const opratorMap = {
      ">": "$ge",
      ">=": "$gte",
      "<": "$lt",
      "=": "$eq",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|<=|=)\b/g;
    let filters = numericFilter.replace(
      regEx,
      (match) => `-${opratorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  console.log(queryObject);
  const getAll = await Product.find(queryObject)
    .skip(skip)
    .sort("createAt")
    .limit(limit);
  res.status(200).json({ success: 200, count: getAll.length, product: getAll });
};

exports.getOneProduct = async (req, res) => {
  const getOne = await Product.findById();
  res.status(200).json(getOne);
};

exports.getStaticProduct = async (req, res) => {
  const staticproductOnly = await Product.find({
    featured: true,
    price: { $gt: 30 },
  })
    .sort("price")
    .select("name price company");
  res
    .status(200)
    .json({ count: staticproductOnly.length, product: staticproductOnly });
};

exports.createProduct = async (req, res) => {
  const { name, price, featured, rating, company } = req.body;
  const getAll = await Product.create({
    name,
    price,
    featured,
    rating,
    company,
  });
  res.status(200).json({ data: getAll });
};

exports.updateProduct = async (req, res) => {
  const getAll = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ success: true, data: getAll });
};

exports.deleteproduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: "Successfully Delete!" });
};
