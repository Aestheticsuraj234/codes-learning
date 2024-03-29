
### 1. $eq (Equals)

The `$eq` operator selects documents where the value of a field equals the specified value.

**Example:**
```javascript
db.products.find({ "price": { $eq: 100 } })
```
This query selects documents where the "price" field is equal to 100.

### 2. $ne (Not Equals)

The `$ne` operator selects documents where the value of a field is not equal to the specified value.

**Example:**
```javascript
db.products.find({ price: { $ne: 100 } })
```
This query selects documents where the "price" field is not equal to 100.

### 3. $gt (Greater Than)

The `$gt` operator selects documents where the value of a field is greater than the specified value.

**Example:**
```javascript
db.products.find({ price: { $gt: 100 } })
```
This query selects documents where the "price" field is greater than 100.

### 4. $gte (Greater Than or Equal To)

The `$gte` operator selects documents where the value of a field is greater than or equal to the specified value.

**Example:**
```javascript
db.products.find({ price: { $gte: 100 } })
```
This query selects documents where the "price" field is greater than or equal to 100.

### 5. $lt (Less Than)

The `$lt` operator selects documents where the value of a field is less than the specified value.

**Example:**
```javascript
db.products.find({ price: { $lt: 100 } })
```
This query selects documents where the "price" field is less than 100.

### 6. $lte (Less Than or Equal To)

The `$lte` operator selects documents where the value of a field is less than or equal to the specified value.

**Example:**
```javascript
db.products.find({ price: { $lte: 100 } })
```
This query selects documents where the "price" field is less than or equal to 100.

### 7. $in (In)

The `$in` operator selects documents where the value of a field matches any value in the specified array.

**Example:**
```javascript
db.products.find({ category: { $in: ["Electronics", "Clothing"] } })
```
This query selects documents where the "category" field matches either "Electronics" or "Clothing".

### 8. $nin (Not In)

The `$nin` operator selects documents where the value of a field does not match any value in the specified array.

**Example:**
```javascript
db.products.find({ category: { $nin: ["Electronics", "Clothing"] } })
```
This query selects documents where the "category" field does not match either "Electronics" or "Clothing".

These comparison operators provide powerful tools for querying MongoDB collections based on specific criteria, enabling you to retrieve the exact data you need.