import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConnection";
import salesRoutes from "./api/routes/sales.route";

dotenv.config();
connectDB();

const app = express();

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
