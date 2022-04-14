const express = require("express");
const handler = require("./handler");
const middleware = require("./middleware");

const port = process.env.PORT || 5000;
const app = express();

// Pasang JSON Parser middleware
app.use(express.json());

// Router
app.post("/api/v1/books", handler.handleCreateBook);
app.get("/api/v1/books", handler.handleListBooks);
app.get("/api/v1/books/:id", middleware.setBook, handler.handleGetBook);
app.put("/api/v1/books/:id", middleware.setBook, handler.handleUpdateBook);
app.delete("/api/v1/books/:id", middleware.setBook, handler.handleDeleteBook);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
