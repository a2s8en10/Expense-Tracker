import express from "express";
import "dotenv/config";
import authMiddleware from "../middleware/auth.js";

import {
  getIncomeOverview,
  addIncome,
  updateIncome,
  deleteIncome,
  downloadIncomeExcel,
  getAllIncome,
} from "../controller/incomeController.js";

const incomerRoute = express.Router();

incomerRoute.post("/add", authMiddleware, addIncome);

incomerRoute.get("/get", authMiddleware, getAllIncome);

incomerRoute.put("/update/:id", authMiddleware, updateIncome);

incomerRoute.get("/downloadexcel", authMiddleware, downloadIncomeExcel);

incomerRoute.delete("/delete/:id", authMiddleware, deleteIncome);

incomerRoute.get("/overview", authMiddleware, getIncomeOverview);

export default incomerRoute;