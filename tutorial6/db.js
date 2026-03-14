/**
 * CSCI 4177/5709 Tutorial 6 - Database Module
 * Shared module for MongoDB connection and user CRUD operations
 */

require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority";

const DATABASE_NAME = "tutorial6_db";
const COLLECTION_NAME = "users";

let client = null;
let usersCollection = null;

/**
 * Convert MongoDB document to API response format (id as string)
 */
function toUserResponse(doc) {
  if (!doc) return null;
  return {
    id: doc._id.toString(),
    email: doc.email,
    firstName: doc.firstName,
  };
}

/**
 * Connect to MongoDB Atlas and return the users collection
 */
async function connectDB() {
  if (usersCollection) return usersCollection;

  client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(DATABASE_NAME);
  usersCollection = db.collection(COLLECTION_NAME);
  return usersCollection;
}

/**
 * Get all users
 */
async function getAllUsers() {
  const collection = await connectDB();
  const docs = await collection.find({}).toArray();
  return docs.map(toUserResponse);
}

/**
 * Get user by ID
 */
async function getUserById(id) {
  if (!ObjectId.isValid(id)) return null;

  const collection = await connectDB();
  const doc = await collection.findOne({ _id: new ObjectId(id) });
  return toUserResponse(doc);
}

/**
 * Create a new user
 */
async function createUser(email, firstName) {
  const collection = await connectDB();
  const doc = {
    email: String(email).trim(),
    firstName: String(firstName).trim(),
  };
  const result = await collection.insertOne(doc);
  return toUserResponse({ _id: result.insertedId, ...doc });
}

/**
 * Update user by ID
 */
async function updateUser(id, updates) {
  if (!ObjectId.isValid(id)) return null;

  const collection = await connectDB();
  const updateFields = {};
  if (updates.email !== undefined) updateFields.email = String(updates.email).trim();
  if (updates.firstName !== undefined) updateFields.firstName = String(updates.firstName).trim();

  if (Object.keys(updateFields).length === 0) return null;

  const result = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updateFields },
    { returnDocument: "after" }
  );
  return toUserResponse(result);
}

/**
 * Delete user by ID
 */
async function deleteUser(id) {
  if (!ObjectId.isValid(id)) return false;

  const collection = await connectDB();
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount === 1;
}

/**
 * Close database connection (for graceful shutdown)
 */
async function closeDB() {
  if (client) {
    await client.close();
    client = null;
    usersCollection = null;
  }
}

module.exports = {
  connectDB,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  closeDB,
};
