import express from "express";
import {
  getDashboardStats,
  getUser,
} from "../controllers/general.controller.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
