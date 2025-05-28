// queries.js

// Finds all books in a specific genre:
db.books.find({ genre: "Fiction" });

// Finds books published after a certain year:
db.books.find({ published_year: { $gt: 2000 } });

// Finds books by a specific author:
db.books.find({ author: "George Orwell" });

// Updates the price of a specific book:
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 15.99 } }
);

// Deletes a book by its title:
db.books.deleteOne({ title: "Moby Dick" });
