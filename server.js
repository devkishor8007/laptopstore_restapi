const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const app = express();
require("dotenv").config();
const cors = require("cors");
require("./db");
require("express-async-errors");
const helmet = require("helmet");
const notfoundanything = require("./middleware/notfound");
const errorHandler = require("./middleware/errorhanler");

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/product", require("./router/product_router"));

app.use(notfoundanything);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
