"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookC = exports.updateBook = exports.createBook = exports.getBook = exports.getAllBooks = void 0;
const books_service_1 = require("./books.service");
const getAllBooks = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const books = await (0, books_service_1.getAllBooksService)(limit);
        return c.json(books);
    }
    catch (error) {
        return c.json({ error: error.message }, 500);
    }
};
exports.getAllBooks = getAllBooks;
const getBook = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        const book = await (0, books_service_1.getBookService)(id);
        return book ? c.json(book) : c.json({ error: "Book not found" }, 404);
    }
    catch (error) {
        return c.json({ error: error.message }, 500);
    }
};
exports.getBook = getBook;
const createBook = async (c) => {
    try {
        const book = await c.req.json();
        const message = await (0, books_service_1.createBookService)(book);
        return c.json({ message });
    }
    catch (error) {
        return c.json({ error: error.message }, 500);
    }
};
exports.createBook = createBook;
const updateBook = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        const book = await c.req.json();
        const message = await (0, books_service_1.updateBookService)(id, book);
        return c.json({ message });
    }
    catch (error) {
        return c.json({ error: error.message }, 500);
    }
};
exports.updateBook = updateBook;
const deleteBookC = async (c) => {
    try {
        const id = Number(c.req.param('id'));
        const message = await (0, books_service_1.deleteBookService)(id);
        return c.json({ message });
    }
    catch (error) {
        return c.json({ error: error.message }, 500);
    }
};
exports.deleteBookC = deleteBookC;
