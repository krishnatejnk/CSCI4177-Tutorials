/**
 * CSCI 4177/5709 Tutorial 6 - REST API with MongoDB
 * Same routes as T5/T4: create user, read user, read user by ID, update user, delete user
 * Database: MongoDB Atlas (NoSQL)
 */

const express = require("express");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check / DB connectivity
app.get("/", async (req, res) => {
  try {
    await db.connectDB();
    res.status(200).json({
      success: true,
      message: "REST API with MongoDB - Tutorial 6",
      endpoints: ["GET /users", "GET /user/:id", "POST /add", "PUT /update/:id", "DELETE /delete/:id"],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Database connection failed",
      error: err.message,
    });
  }
});

// GET /users - Retrieve list of all users
app.get("/users", async (req, res) => {
  try {
    const users = await db.getAllUsers();
    res.status(200).json({
      message: "Users retrieved",
      success: true,
      users,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

// GET /user/:id - Retrieve a single user by ID
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.getUserById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

// POST /add - Add a new user
app.post("/add", async (req, res) => {
  try {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
      return res.status(400).json({
        message: "Invalid input: email and firstName are required",
        success: false,
      });
    }

    await db.createUser(email, firstName);

    res.status(201).json({
      message: "User added",
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

// PUT /update/:id - Update an existing user
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { email, firstName } = req.body;

    if (email === undefined && firstName === undefined) {
      return res.status(400).json({
        message: "Invalid input: at least one of email or firstName is required",
        success: false,
      });
    }

    const user = await db.updateUser(id, { email, firstName });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User updated",
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

// DELETE /delete/:id - Delete a user by ID
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await db.deleteUser(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found",
    success: false,
  });
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await db.closeDB();
  process.exit(0);
});

app.listen(PORT, async () => {
  try {
    await db.connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    console.log("Server starting - set MONGODB_URI to connect to database");
  }
});
