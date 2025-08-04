# Express Router Lab

A modular Express.js demo app showcasing clean routing structure using `express.Router()`, route-level middleware, and MongoDB integration via Mongoose.

This project is intentionally lightweight and built as a **learning-focused mini API**, not a full-stack product. It includes three key modules: `dogs` (MongoDB-backed), `shelters` (mock in-memory), and `admin` (protected routes using middleware).

---

## Features

- Modular routing with `express.Router()`
- MongoDB integration with Mongoose (`/dogs`)
- Middleware-protected admin routes
- JSON-based API responses
- In-memory mock routes for `/shelters`
- Basic request logging and 404 handler
- Lightweight and educational backend starter

---

## Routes & App Flow

### Dogs (MongoDB-backed)
- `GET /dogs` – View all dogs *(JSON response)*
- `POST /dogs` – Add a new dog (`name`, `age`, `breed`)
- `GET /dogs/:id` – View a dog by ID *(JSON response)*

### Shelters (In-memory)
- `GET /shelters` – View all shelters *(JSON response)*
- `POST /shelters` – Add a new shelter
- `GET /shelters/:id` – View a shelter by ID *(JSON response)*

### Admin (Middleware protected)
- `GET /admin/dashboard?isAdmin=true` – Admin dashboard with internal links
- `GET /admin/stats?isAdmin=true` – View mock app stats *(JSON response)*
- `GET /admin/maintenance?isAdmin=true` – Simulate maintenance tasks

> All `/admin` routes require `?isAdmin=true` in the query string.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```
## 2. Start MongoDB (if not running automatically)
MongoDB must be running for the `/dogs` routes and `seeds.js` to work:
```bash
mongod
```
### 3. Seed the Database (Optional)
Populate the dogs collection with sample data:
```bash
node seeds.js
```
### 4. Run the Server
```bash
node index.js
```
Server runs at: `http://localhost:3000`

---

## Use Cases

This project is ideal for:
- Practicing modular routing with Express.js
- Understanding route-level middleware (admin protection)
- Learning how to connect MongoDB with Mongoose
- Comparing persistent (MongoDB) vs. mock in-memory data

---

## Project Structure

- `index.js` – Main Express app setup, route registration, DB connection
- `routes/dogs.js` – MongoDB-backed routes for dogs (GET, POST, :id)
- `routes/shelters.js` – In-memory route examples for shelter endpoints
- `routes/admin.js` – Middleware-protected admin-only routes
- `models/dogs.js` – Mongoose schema and model for Dog
- `seeds.js` – Script to populate the database with sample dog data

---

## Feedback

If this project helped you learn or practice Express routing patterns, feel free to star the repo or use it as a base for your own ideas.

---

## License

This project is licensed under the [MIT License](LICENSE)