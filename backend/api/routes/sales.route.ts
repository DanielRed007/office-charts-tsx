import express from "express";
import { SalesController } from "../controllers/sales.controller";

const router = express.Router();

const salesController = new SalesController();

router.get("/all", salesController.getAllSales);
router.get("/office-one", salesController.graphicsByOfficeOne);
router.get("/list", salesController.getSalesDetailsList);

export default router;
