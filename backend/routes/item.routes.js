import express from "express";
import { createItem, getAllItems, getItem, updateItem, deleteItem } from "../controllers/item.controller.js";

const router = express.Router();

router.post("/create", createItem);
router.post("/read", getAllItems);
router.get("/read/:id", getItem);
router.put("/update/:id", updateItem);
router.delete("/delete", deleteItem);

export default router;