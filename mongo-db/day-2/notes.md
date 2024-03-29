

### Managing Databases

1. **Show Databases**:

   - Syntax: `show dbs`
   - Description: Displays a list of all databases present on the MongoDB server along with their respective sizes.
   - Example:
     ```
     > show dbs
     admin   0.000GB
     local   0.000GB
     test    0.000GB
     ```

2. **Switch Database**:

   - Syntax: `use <db-name>`
   - Description: Switches to the specified database. If the database doesn't exist, MongoDB creates it upon the first write operation.
   - Example:
     ```
     > use myDatabase
     switched to db myDatabase
     ```

3. **Show Current Database**:

   - Syntax: `db`
   - Description: Displays the name of the current database in use.
   - Example:
     ```
     > db
     myDatabase
     ```

4. **Drop Database**:
   - Syntax: `db.dropDatabase()`
   - Description: Drops the current database. This action permanently deletes all data stored in the database, so use with caution.
   - Example:
     ```
     > db.dropDatabase()
     { "dropped": "myDatabase", "ok": 1 }
     ```

### Managing Collections

1. **Show Collections**:

   - Syntax: `show collections`
   - Description: Lists all collections within the current database.
   - Example:
     ```
     > show collections
     myCollection1
     myCollection2
     ```

2. **Create Collection**:

   - Syntax: `db.createCollection('collection-name', options)`
   - Description: Creates a new collection with the specified name. Options can be provided for configuring the collection, such as specifying validation rules.
   - Example:
     ```
     > db.createCollection('users')
     { "ok" : 1 }
     ```

3. **Drop Collection**:
   - Syntax: `db.collection-name.drop()`
   - Description: Deletes the specified collection from the current database.
   - Example:
     ```
     > db.users.drop()
     true
     ```

### Insert Operation in MongoDB

#### Inserting Documents in MongoDB

To insert documents into a MongoDB collection, you can use the `insertOne()` method to insert a single document or the `insertMany()` method to insert multiple documents at once.

**Inserting a Single Document:**

```javascript
db.collection-name.insertOne({key: value})
```

**Example:**

```javascript
> db.users.insertOne({
    name: "Alice",
    age: 30,
    email: "x@Aestheticsuraj234",
    hobbies: ["reading", "painting"],
    address: {
        city: "New York",
        country: "USA"
    }
})

#output
{
    "acknowledged" : true,
    "insertedId" : ObjectId("5f7b3...7")
}
```

**Inserting Multiple Documents:**

```javascript
db.collection-name.insertMany([{key: value}, {key: value}])
```

**Example:**

```javascript
> db.users.insertMany([
    {
        name: "Bob",
        age: 25
    },
    {
        name: "Charlie",
        age: 35
    }
])
{
    "acknowledged" : true,
    "insertedIds" : [
        ObjectId("5f7b3...8"),
        ObjectId("5f7b3...9")
    ]
}
```

#### When to Use Quotes and When Not to?

- Use quotes around keys and string values.
- Quotes are also used when specifying string values for keys or values within an object.

#### Ordered and Unordered Inserts

- **Ordered Inserts**: By default, `insertMany()` performs ordered inserts, processing documents in the array in order and stopping if an error occurs. It maintains the order of the documents in the array.
- **Unordered Inserts**: To perform unordered inserts, specify the `ordered: false` option. MongoDB attempts to insert all documents in the array, even if some fail. It doesn't guarantee order preservation.

#### Case Sensitivity in MongoDB

- MongoDB is case-sensitive for field names, collection names, and database names.
- For example, "name", "Name", and "NAME" would be considered as distinct field names.

These comprehensive notes should provide a thorough understanding of managing databases, collections, and insertion operations in MongoDB.