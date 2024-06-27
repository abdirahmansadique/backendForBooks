"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookService = exports.updateBookService = exports.createBookService = exports.getBookService = exports.getAllBooksService = void 0;
const db_1 = require("../drizzle/db");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../drizzle/schema");
// Get all books
const getAllBooksService = async (limit) => {
    return limit ? await db_1.db.query.TableBook.findMany({ limit }) : await db_1.db.query.TableBook.findMany();
};
exports.getAllBooksService = getAllBooksService;
// Get a single book
const getBookService = async (id) => {
    return await db_1.db.query.TableBook.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.TableBook.id, id)
    });
};
exports.getBookService = getBookService;
// Create 
const createBookService = async (data) => {
    await db_1.db.insert(schema_1.TableBook).values(data);
    return "Book created successfully";
};
exports.createBookService = createBookService;
// Update
const updateBookService = async (id, data) => {
    await db_1.db.update(schema_1.TableBook).set(data).where((0, drizzle_orm_1.eq)(schema_1.TableBook.id, id));
    return "Book updated successfully";
};
exports.updateBookService = updateBookService;
// Delete
const deleteBookService = async (id) => {
    await db_1.db.delete(schema_1.TableBook).where((0, drizzle_orm_1.eq)(schema_1.TableBook.id, id));
    return "Book deleted successfully";
};
exports.deleteBookService = deleteBookService;
