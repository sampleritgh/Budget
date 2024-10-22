const express = require('express');
const router = express.Router();
const db = require('./db');

// POST /transactions: Adds a new transaction
router.post('/transactions', (req, res) => {
  const { type, category, amount, date, description } = req.body;
  const sql = `INSERT INTO transactions (type, category, amount, date, description) 
               VALUES (?, ?, ?, ?, ?)`;
  
  db.run(sql, [type, category, amount, date, description], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID });
  });
});

// GET /transactions: Retrieves all transactions
router.get('/transactions', (req, res) => {
  const sql = 'SELECT * FROM transactions';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// GET /transactions/:id: Retrieves a transaction by ID
router.get('/transactions/:id', (req, res) => {
  const sql = 'SELECT * FROM transactions WHERE id = ?';
  db.get(sql, [req.params.id], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Transaction not found' });
      return;
    }
    res.json(row);
  });
});

// PUT /transactions/:id: Updates a transaction by ID
router.put('/transactions/:id', (req, res) => {
  const { type, category, amount, date, description } = req.body;
  const sql = `UPDATE transactions 
               SET type = ?, category = ?, amount = ?, date = ?, description = ? 
               WHERE id = ?`;
  
  db.run(sql, [type, category, amount, date, description, req.params.id], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Transaction not found' });
      return;
    }
    res.json({ message: 'Transaction updated successfully' });
  });
});

// DELETE /transactions/:id: Deletes a transaction by ID
router.delete('/transactions/:id', (req, res) => {
  const sql = 'DELETE FROM transactions WHERE id = ?';
  db.run(sql, [req.params.id], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Transaction not found' });
      return;
    }
    res.json({ message: 'Transaction deleted successfully' });
  });
});

// GET /summary: Retrieves a summary of transactions
router.get('/summary', (req, res) => {
  const { startDate, endDate, category } = req.query;
  let sql = `SELECT 
                SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) as totalIncome,
                SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) as totalExpense,
                SUM(CASE WHEN type = 'income' THEN amount ELSE -amount END) as balance
              FROM transactions`;
  
  const params = [];
  const conditions = [];

  if (startDate) {
    conditions.push('date >= ?');
    params.push(startDate);
  }
  if (endDate) {
    conditions.push('date <= ?');
    params.push(endDate);
  }
  if (category) {
    conditions.push('category = ?');
    params.push(category);
  }

  if (conditions.length > 0) {
    sql += ' WHERE ' + conditions.join(' AND ');
  }

  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

module.exports = router;
