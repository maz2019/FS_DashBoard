import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import generalRoutes from "./routes/general.route.js";
import clientRoutes from "./routes/client.route.js";
import managementRoutes from "./routes/management.route.js";
import salesRoutes from "./routes/sales.route.js";

import { connectDB } from "./lib/db.js";

import User from "./models/User.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import ProductStat from "./models/ProductStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

//MONGOOSE SETUP
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});

/* ONLY ADD DATA ONE TIME */
// User.insertMany(dataUser);
// Product.insertMany(dataProduct);
// Transaction.insertMany(dataTransaction);
// ProductStat.insertMany(dataProductStat);
// OverallStat.insertMany(dataOverallStat);
// AffiliateStat.insertMany(dataAffiliateStat);
