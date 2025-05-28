# 📚 PLP Week 1 Assignment – MongoDB Fundamentals

This project contains MongoDB scripts and operations for the Week 1 assignment of the MERN Stack specialization at Power Learn Project (PLP) Africa. It demonstrates working with MongoDB using `mongosh` and JavaScript to perform CRUD operations, advanced queries, aggregations, and indexing.

---

## Project Structure

```
.
├── insert_books.js       # Inserts sample book data
├── aggregation.js        # Aggregation pipelines
├── indexing.js           # Index creation and performance test
├── screenshots/
│   └── books.png         # Screenshot from MongoDB Compass
├── .gitignore
├── package.json
├── README.md             # This file
├── Week1-Assignment.md   # Assignment instructions
```

---

## How to Run the Scripts

### 1. Make sure MongoDB is running locally

If installed locally:
```bash
mongod
```

### 2. Run the Insert Script
```bash
node insert_books.js
```
This will:
- Drop the `books` collection (if it exists)
- Insert sample book data
- Display inserted books

### 3. Run Aggregation Script
```bash
node aggregation.js
```
This script will:
- Calculate average price by genre
- Find the author with the most books
- Group books by publication decade

### 4. Run Indexing Script
```bash
node indexing.js
```
This will:
- Create a single-field index on `title`
- Create a compound index on `author` and `published_year`
- Show performance improvement using `explain()`

---

## Screenshot

Below is a screenshot from MongoDB Compass showing the `books` collection and inserted sample data in the `plp_bookstore` database:

![MongoDB Compass](./screenshots/books.png)

---

## Notes

- All scripts are written in vanilla Node.js using the MongoDB Node driver.
- Tested using MongoDB v6+ on local instance via `mongosh` and Compass.

---

## Assignment Tasks Covered

### Task 1: CRUD Operations
- ✔️ Inserted sample data
- ✔️ Performed queries to read, update, and delete documents

### Task 2: Advanced Queries
- ✔️ Queried books in stock and published after 2010
- ✔️ Used projection to return specific fields
- ✔️ Implemented sorting, limiting, and skipping

### Task 3: Aggregation Pipeline
- ✔️ Average price by genre
- ✔️ Author with most books
- ✔️ Books grouped by publication decade

### Task 4: Indexing
- ✔️ Index on `title`
- ✔️ Compound index on `author` and `published_year`
- ✔️ Used `explain()` to show performance gain

---

## Author

**Wayne Chibeu**  
PLP Africa – MERN Stack Specialization  
_May 2025_
