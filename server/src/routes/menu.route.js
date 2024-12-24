import express from "express";
import Menu from "../models/menu.model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data);
    const menuResponse = await newMenu.save();
    res.status(200).json({ message: "new menu saved" });
  } catch (error) {
    res.status(500).json({ message: "menu error", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: "menu error", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findById(id, req.body);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: "menu error", error });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findByIdAndUpdate(id, req.body);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: "menu error", error });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findByIdAndDelete(id);
    res.status(200).json({ message: "menu item deleted" });
  } catch (error) {
    res.status(500).json({ message: "menu error", error });
  }
});

export default router;
