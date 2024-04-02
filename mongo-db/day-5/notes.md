
---

In MongoDB, the `$expr` operator enables the utilization of aggregation expressions within the query language, allowing for comparisons of fields within a document or between documents within the same collection. Conversely, element operators in MongoDB facilitate document queries based on the existence or type of fields.

### `$expr` Operator:

The `$expr` operator permits the integration of aggregation expressions within the query language. It facilitates comparisons of fields within a document or across documents within the same collection.

#### Example 1: Comparing Fields Within a Document

Consider a collection named `students` with documents like this:

```json
{ 
  "_id" : ObjectId("..."), 
  "name" : "John", 
  "score" : 85, 
  "passing_score" : 70 
}
```

To find all students who scored higher than their passing score:

```javascript
db.students.find({ $expr: { $gt: ["$score", "$passing_score"] } })
```

#### Example 2: Comparing Fields Across Documents

Suppose we have two collections, `orders` and `inventory`, and we want to find orders where the order quantity is greater than the available quantity in inventory:

```javascript
db.orders.find({ $expr: { $gt: ["$quantity", { $sum: "$inventory_quantity" }] } })
```

### Element Operators:

Element operators in MongoDB are employed to query documents based on the existence or type of fields.

#### `$exists` Operator:

The `$exists` operator verifies the existence of a field.

```javascript
db.collection.find({ field: { $exists: true } })
```

This retrieves all documents in the collection where the field exists.

#### `$type` Operator:

The `$type` operator validates the type of a field.

```javascript
db.collection.find({ field: { $type: "string" } })
```

This fetches all documents where the field is of type string.

In MongoDB, each data type is represented by a numeric code for the `$type` operator. Here are some common numeric type codes and their corresponding data types:

- **1**: Double
- **2**: String
- **3**: Object
- **4**: Array
- **5**: Binary data
- **6**: Undefined (deprecated)
- **7**: ObjectId
- **8**: Boolean
- **9**: Date
- **10**: Null
- **11**: Regular Expression
- **12**: JavaScript
- **13**: Symbol (deprecated)
- **14**: JavaScript (with scope)
- **15**: 32-bit Integer
- **16**: Timestamp
- **17**: 64-bit Integer
- **18**: Min key
- **19**: Max key

So, for example, if you want to find documents where a field is of type Double, you would use `{$type: 1}` in your query. Similarly, for finding documents with String fields, you would use `{$type: 2}`.

Here's an example query finding documents where the field "price" is of type Double:

```javascript
db.collection.find({ price: { $type: 1 } })
```

And here's an example finding documents where the field "name" is of type String:

```javascript
db.collection.find({ name: { $type: 2 } })
```

You can use these numeric codes to filter documents based on their data types in your queries.

#### `$size` Operator:

The `$size` operator assesses the number of elements in an array field.

```javascript
db.collection.find({ field: { $size: size } })
```

This retrieves all documents where the field is an array with exactly `size` elements.

### Example:

Consider a collection `students` with documents like this:

```json
[{  "name" : "Alice", "grades" : [80, 85, 90] }
{  "name" : "Bob", "grades" : [75, 82] }
{  "name" : "Charlie", "grades" : [90, 95, 88, 92] }]
```

1. Find all students who have exactly 3 grades:

```javascript
db.students.find({ grades: { $size: 3 } })
```

This query will return the documents for Alice and Charlie because both have exactly 3 grades in their `grades` array.

2. Find all students who have more than 2 grades:

```javascript
db.students.find({ grades: { $expr: { $gt: [{ $size: "$grades" }, 2] } } })
  
```

This query will return the document for Charlie because he has more than 2 grades in his `grades` array.

---

