// aggregation.js

// 1. Counts the number of books in each genre
db.books.aggregate([
    {
      $group: {
        _id: "$genre",
        count: { $sum: 1 }
      }
    }
  ]);
  
  // 2. Calculates the average price of all books
  db.books.aggregate([
    {
      $group: {
        _id: null,
        averagePrice: { $avg: "$price" }
      }
    }
  ]);
  
  // 3. Finds the most recently published book
  db.books.aggregate([
    {
      $sort: { published_year: -1 }
    },
    {
      $limit: 1
    }
  ]);
  