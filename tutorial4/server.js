const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory user store (matches sample data from instructions)
let users = [
  {
    id: '5abf6783',
    email: 'abc@abc.ca',
    firstName: 'ABC'
  },
  {
    id: '5abf674563',
    email: 'xyz@xyz.ca',
    firstName: 'XYZ'
  }
];

// Generate unique ID for new users
function generateId() {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36).substring(4, 10);
}

// GET /users - Retrieve list of all users
app.get('/users', (req, res) => {
  try {
    res.status(200).json({
      message: 'Users retrieved',
      success: true,
      users
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal server error',
      success: false
    });
  }
});

// GET /user/:id - Retrieve a single user by ID
app.get('/user/:id', (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find(u => u.id === id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        success: false
      });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal server error',
      success: false
    });
  }
});

// POST /add - Add a new user
app.post('/add', (req, res) => {
  try {
    const { email, firstName } = req.body;

    // Validate required fields (400 Bad Request)
    if (!email || !firstName) {
      return res.status(400).json({
        message: 'Invalid input: email and firstName are required',
        success: false
      });
    }

    const newUser = {
      id: generateId(),
      email: String(email).trim(),
      firstName: String(firstName).trim()
    };

    users.push(newUser);

    res.status(201).json({
      message: 'User added',
      success: true
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal server error',
      success: false
    });
  }
});

// PUT /update/:id - Update an existing user
app.put('/update/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { email, firstName } = req.body;

    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return res.status(404).json({
        message: 'User not found',
        success: false
      });
    }

    // At least one field must be provided (400 Bad Request)
    if (!email && !firstName) {
      return res.status(400).json({
        message: 'Invalid input: at least one of email or firstName is required',
        success: false
      });
    }

    if (email !== undefined) users[userIndex].email = String(email).trim();
    if (firstName !== undefined) users[userIndex].firstName = String(firstName).trim();

    res.status(200).json({
      message: 'User updated',
      success: true
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal server error',
      success: false
    });
  }
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: 'Endpoint not found',
    success: false
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
