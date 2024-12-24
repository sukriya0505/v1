import express from "express";
import Person from "../models/person.model.js";
import { jwtAuth, generateToken } from "../auth/jwt.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    // get the data
    const data = req.body;
    // create an object
    const newPerson = new Person(data);
    // save the data
    const response = await newPerson.save();
    console.log("data saved");
    //payload
    const payload = {
      id: response.id,
      username: response.username,
    };
    // jwt
    const token = generateToken(payload);

    res.status(200).json({ message: "data created", response });
  } catch (error) {
    res.status(500).json({ error: "Internal error", error });
  }
});

// login

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Person.findOne({
      username: username,
    });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: " invalid username or password" });
    }
    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = generateToken(payload);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal error", error });
  }
});

router.get("/", jwtAuth, async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched from the database");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Person.findById(id);
    console.log("data fetched from the database");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Person.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!Person) {
      return res.status(404).json({ message: "person not found" });
    }
    console.log("data updated");
    res.status(200).json({ message: "data updated", data });
  } catch (error) {
    res.status(500).json({ error: "Internal error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Person.findByIdAndDelete(id);
    console.log("data deleted successfully");
    res.status(200).json({ message: "data deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (!workType) {
      res.status(400).json({ error: "Work type parameter is required" });
      return;
    }
    if (
      workType === "chef" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const data = await Person.find({ work: workType });
      console.log("Work data fetched from the database");
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.error("Error:", error); // Log the error message
    res.status(500).json({ error: "Internal error" });
  }
});

export default router;
