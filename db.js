const sqlite3 = require('sqlite3').verbose()
const dbName = 'mydb.db'

let db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Connected to the Database");
        db.run(`CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT CHECK(type IN ('income', 'expense')) NOT NULL,
            category TEXT,
            amount REAL,
            date TEXT,
            description TEXT
        )`);
    }
})

module.exports = db;
