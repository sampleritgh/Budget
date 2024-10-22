# Budget API

This project is a RESTful API for managing financial transactions using Node.js, Express, and SQLite.

## Setup and Run Instructions

1. Clone the repository:
   ```
   git clone https://github.com/sampleritgh/Budget.git
   cd Budget
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the server:
   ```
   npm start
   ```

   The server will start on `http://localhost:3000`.

## API Documentation

### Transactions

1. **POST /transactions**
   - Adds a new transaction
   - Body: `{ type, category, amount, date, description }`
   - Example:
     ```json
     {
       "type": "expense",
       "category": "Food",
       "amount": 25.50,
       "date": "2023-05-01",
       "description": "Lunch"
     }
     ```

2. **GET /transactions**
   - Retrieves all transactions

3. **GET /transactions/:id**
   - Retrieves a transaction by ID

4. **PUT /transactions/:id**
   - Updates a transaction by ID
   - Body: `{ type, category, amount, date, description }`

5. **DELETE /transactions/:id**
   - Deletes a transaction by ID

### Summary

6. **GET /summary**
   - Retrieves a summary of transactions
   - Query parameters: 
     - `startDate`: Start date for filtering (optional)
     - `endDate`: End date for filtering (optional)
     - `category`: Category for filtering (optional)

## API Demonstration

### POST /transactions
![POST /transactions](./screenshots/post_transaction.png)

### GET /transactions
![GET /transactions](./screenshots/get_transactions.png)

### GET /transactions/:id
![GET /transactions/:id](./screenshots/get_transaction_by_id.png)

### PUT /transactions/:id
![PUT /transactions/:id](./screenshots/update_transaction.png)

### DELETE /transactions/:id
![DELETE /transactions/:id](./screenshots/delete_transaction.png)

### GET /summary
![GET /summary](./screenshots/get_summary.png)
