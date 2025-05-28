// indexing.js

// 1. Creates an index on the "title" field to speed up search by title
db.books.createIndex({ title: 1 });

// 2. Creates a compound index on "author" and "published_year"
db.books.createIndex({ author: 1, published_year: -1 });

// 3. Query with explain
db.books.find({ title: "The Alchemist" }).explain("executionStats");

// 4. Verifies indexes using:
db.books.getIndexes();
