### Cursors in MongoDB:

In MongoDB, queries return a cursor by default when they query the database. A cursor is a pointer to the result set of a query. Cursors are used to iterate over the result set and retrieve documents one by one.

\***\* Cursors in JavaScript are commonly used in databases, especially in NoSQL databases like MongoDB, to iterate over query results or perform operations like counting, limiting, sorting, skipping, etc. Here are some notes on common cursor methods:\*\***

1. ✅**count()**: This method is used to count the number of documents that match a query. It returns a count of documents that would match a find() query.

   ```javascript
   db.collection.find(query).count();
   ```

2. ✅**limit()**: The limit() method is used to limit the number of documents returned by a query.

   ```javascript
   db.collection.find(query).limit(5);
   ```

   This will return at most 5 documents that match the query.

3. **sort()**: The sort() method is used to sort the documents returned by a query based on certain fields.

   ```javascript
   db.collection.find(query).sort({ field: 1 });
   ```

   This sorts the documents in ascending order based on the specified field. Use `-1` for descending order.

4. **skip()**: The skip() method is used to skip a specified number of documents in the result set and then return the remaining documents.

   ```javascript
   db.collection.find(query).skip(10);
   ```

   This skips the first 10 documents that match the query and returns the rest.
   ```

### Logical Operators in MongoDB:

MongoDB provides logical operators to perform queries with conditions involving multiple fields or values.

#### $and Operator:

The `$and` operator selects documents that satisfy all the specified conditions.

```javascript
// Find documents where price is greater than 100 and category is "Electronics"
db.products.find({
  $and: [{ price: { $gt: 100 } }, { category: "Electronics" }],
});
```

#### $or Operator:

The `$or` operator selects documents that satisfy at least one of the specified conditions.

```javascript
// Find documents where price is less than 100 or category is "Books"
db.products.find({ $or: [{ price: { $lt: 100 } }, { category: "Books" }] });
```

#### $not Operator:

The `$not` operator selects documents that do not match the specified condition.

```javascript
// Find documents where price is not equal to 100
db.products.find({ price: { $not: { $eq: 100 } } });
```

#### $nor Operator:

The `$nor` operator selects documents that fail all the specified conditions.

```javascript
// Find documents where price is not equal to 100 and category is not "Books"
db.products.find({ $nor: [{ price: { $eq: 100 } }, { category: "Books" }] });
```

#### Combining Logical Operators:

Logical operators can be combined to create complex queries.

```javascript
// Find documents where price is greater than 100 and category is "Electronics" or "Books"
db.products.find({
  $and: [
    { price: { $gt: 100 } },
    { $or: [{ category: "Electronics" }, { category: "Books" }] },
  ],
});
```

These examples demonstrate how to use cursors and logical operators effectively in MongoDB queries.
