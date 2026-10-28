const { DatabaseSync } = require('node:sqlite')
const database = new DatabaseSync("./db.db")

function initDB() {
    database.exec(`
        CREATE TABLE IF NOT EXISTS quiz(
            key INTEGER PRIMARY KEY,
            name TEXT,
            quiz TEXT
        )`)
}

function getQuiz(id) {
    const query = database.prepare("SELECT quiz FROM quiz WHERE key = ?");
    return JSON.parse(query.get(id).quiz);
}

function registerQuiz(name, data) {
    const stringified = JSON.stringify(data);
    const query = database.prepare("INSERT INTO quiz (name, quiz) VALUES (?, ?)");
    return query.run(name, stringified);
}

module.exports = { initDB, getQuiz, registerQuiz }