/**
 * CSCI 4177/5709 Tutorial 5 - MongoDB Atlas
 * Creating Database Instance, Schema, and CRUD Queries
 * 
 * Run: node index.js
 * Set MONGODB_URI environment variable with your Atlas connection string
 */

const { MongoClient, ObjectId } = require("mongodb");
const {
  SAMPLE_DOCUMENTS,
  DATABASE_NAME,
  COLLECTION_NAME,
} = require("./schema");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  const client = new MongoClient(MONGODB_URI);

  try {
    console.log("=".repeat(60));
    console.log("CSCI 4177/5709 Tutorial 5 - MongoDB Atlas");
    console.log("=".repeat(60));

    // 1. Connect to MongoDB Atlas
    console.log("\n[1] Connecting to MongoDB Atlas...");
    await client.connect();
    console.log("    ✓ Connected successfully");

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // 2. Clear existing data (for clean demo)
    await collection.deleteMany({});
    console.log("\n[2] Collection cleared for demo.");

    // 3. INSERT QUERY - Insert 10-15 records
    console.log("\n" + "-".repeat(60));
    console.log("QUERY 1: INSERT - Insert multiple records (10-15)");
    console.log("-".repeat(60));
    const insertResult = await collection.insertMany(SAMPLE_DOCUMENTS);
    console.log("Query: db.books.insertMany([...12 documents...])");
    console.log("Result: Inserted", insertResult.insertedCount, "documents");
    console.log("Inserted IDs:", Object.values(insertResult.insertedIds).map((id) => id.toString()));

    // 4. RETRIEVE QUERY - Get all records
    console.log("\n" + "-".repeat(60));
    console.log("QUERY 2: RETRIEVE - Get all records");
    console.log("-".repeat(60));
    const allRecords = await collection.find({}).toArray();
    console.log("Query: db.books.find({})");
    console.log("Result: Retrieved", allRecords.length, "documents");
    console.log(JSON.stringify(allRecords, null, 2));

    // Pick first document for modification
    const docToModify = allRecords[0];
    const docId = docToModify._id;

    // 5. MODIFICATION QUERY - Update one record
    console.log("\n" + "-".repeat(60));
    console.log("QUERY 3: MODIFICATION - Update one record");
    console.log("-".repeat(60));
    const updateResult = await collection.updateOne(
      { _id: docId },
      { $set: { inStock: false, title: "The Great Gatsby (Updated)" } }
    );
    console.log("Query: db.books.updateOne({ _id: ObjectId('...') }, { $set: { inStock: false, title: 'The Great Gatsby (Updated)' } })");
    console.log("Result: Matched:", updateResult.matchedCount, "| Modified:", updateResult.modifiedCount);

    // 6. RETRIEVE QUERY - Get the modified record
    console.log("\n" + "-".repeat(60));
    console.log("QUERY 4: RETRIEVE - Get modified record");
    console.log("-".repeat(60));
    const modifiedRecord = await collection.findOne({ _id: docId });
    console.log("Query: db.books.findOne({ _id: ObjectId('...') })");
    console.log("Result:", JSON.stringify(modifiedRecord, null, 2));

    console.log("\n" + "=".repeat(60));
    console.log("All queries completed successfully.");
    console.log("=".repeat(60));
  } catch (err) {
    console.error("Error:", err.message);
    if (err.message?.includes("credentials")) {
      console.log("\nTip: Set MONGODB_URI with your Atlas connection string:");
      console.log('  set MONGODB_URI="mongodb+srv://user:pass@cluster.mongodb.net/"');
    }
  } finally {
    await client.close();
  }
}

main();
