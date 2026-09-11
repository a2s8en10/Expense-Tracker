import express from "express";
import "dotenv/config";

import { getDashboardDataOverview } from "../controller/dashboardController.js";
import authMiddleware from "../middleware/auth.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/", authMiddleware, getDashboardDataOverview);

export default dashboardRouter;
