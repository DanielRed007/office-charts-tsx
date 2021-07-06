import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConnection";
import salesRoutes from "./api/routes/sales.route";
// temporary cors
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Api OK!");
});

app.use("/api/sales", salesRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port: ${port}`);
});
