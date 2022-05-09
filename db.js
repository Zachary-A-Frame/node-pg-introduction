/** Database setup for BizTime. */

const { Client } = require("pg");

let DB_URI;

// If we're running in test "mode", use our test db
// Make sure to create both databases!
// postgresql://postgres:{password}@localhost:5432/blogly
// if (process.env.NODE_ENV === "test") {
//     DB_URI = "postgresql://postgres:1234@localhost:5432/usersdb_test";
// } else {
//     DB_URI = "postgresql://postgres:1234@localhost:5432/usersdb";
// }

DB_URI = "postgresql://postgres:1234@localhost:5432/biztime";


let db = new Client({
    connectionString: DB_URI
});

db.connect();

module.exports = db;