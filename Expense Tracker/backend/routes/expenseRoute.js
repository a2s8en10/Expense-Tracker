import express from "express";
import "dotenv/config";
import authMiddleware from "../middleware/auth.js";

import {
  getExpenseOverview,
  addExpense,
  updateExpense,
  deleteExpense,
  downloadExpenseExcel,
  getAllExpenses,
} from "../controller/expenseController.js";

const expenseRouter = express.Router();

expenseRouter.post("/add", authMiddleware, addExpense);

expenseRouter.get("/get", authMiddleware, getAllExpenses);

expenseRouter.put("/update/:id", authMiddleware, updateExpense);

expenseRouter.get("/downloadexcel", authMiddleware, downloadExpenseExcel);

expenseRouter.delete("/delete/:id", authMiddleware, deleteExpense);

expenseRouter.get("/overview", authMiddleware, getExpenseOverview);

export default expenseRouter;
