import { Hono } from "hono";
import { Context } from "hono";
import { listBooks, getBooks, createBooks, updateBooks, deleteBooks } from "./Books.controller";
import { zValidator } from "@hono/zod-validator";
import { BooksSchema } from "../validators";

export const BooksRouter = new Hono();

// Get all books
BooksRouter.get("/Books", listBooks);
// Get a single book
BooksRouter.get("/Books/:id", getBooks);
// Create a Books
BooksRouter.post("/Books", zValidator('json', BooksSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), createBooks);
// Update a Books
BooksRouter.put("/Books/:id", updateBooks); 

BooksRouter.get("/Books", zValidator('json', BooksSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), createBooks);

// Delete a Book
BooksRouter.delete("/Books/:id", deleteBooks);

BooksRouter.get("/Books", getBooks);
