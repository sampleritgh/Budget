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
![POST /transactions]((https://res.cloudinary.com/dy8shu8ss/image/upload/v1729658761/Screenshot_2024-10-23_101534_rgnwy6.png))

### GET /transactions
![GET /transactions](https://res.cloudinary.com/dy8shu8ss/image/upload/v1729658613/Screenshot_2024-10-23_101258_vhstzo.png)

### GET /transactions/:id
![GET /transactions/:id](https://res.cloudinary.com/dy8shu8ss/image/upload/v1729658481/Screenshot_2024-10-23_023246_zwyzt5.png)

### PUT /transactions/:id
![PUT /transactions/:id](https://res.cloudinary.com/dy8shu8ss/image/upload/v1729657786/Screenshot_2024-10-23_093951_u5prdo.png)

### DELETE /transactions/:id
![DELETE /transactions/:id](https://res.cloudinary.com/dy8shu8ss/image/upload/v1729658174/Screenshot_2024-10-23_093927_qkdmo0.png)

### GET /summary
![GET /summary](https://res.cloudinary.com/dy8shu8ss/image/upload/v1729658288/Screenshot_2024-10-23_093812_glnoc3.png)
