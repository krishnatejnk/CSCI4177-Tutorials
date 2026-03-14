# MongoDB Queries - Tutorial 5

Use these queries in MongoDB Atlas Data Explorer or Compass for screenshots.

## Database & Collection
- **Database:** tutorial5_db
- **Collection:** books

## Schema
```javascript
{
  _id: ObjectId,
  title: String,
  author: String,
  genre: String,
  year: Number,
  inStock: Boolean
}
```

---

## Query 1: Insert 10-15 records
```javascript
db.books.insertMany([
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, inStock: true },
  { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949, inStock: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, inStock: true },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813, inStock: false },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937, inStock: true },
  { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", year: 1997, inStock: true },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, inStock: true },
  { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", year: 1932, inStock: false },
  { title: "Lord of the Flies", author: "William Golding", genre: "Fiction", year: 1954, inStock: true },
  { title: "Animal Farm", author: "George Orwell", genre: "Dystopian", year: 1945, inStock: true },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", year: 1988, inStock: true },
  { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Dystopian", year: 1953, inStock: true }
]);
```

---

## Query 2: Retrieve all records
```javascript
db.books.find({})
```

---

## Query 3: Modify one record
Replace `OBJECTID_HERE` with the actual _id from a document (e.g., the first one).
```javascript
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { inStock: false, title: "The Great Gatsby (Updated)" } }
)
```

---

## Query 4: Retrieve the modified record
```javascript
db.books.findOne({ title: "The Great Gatsby (Updated)" })
```
