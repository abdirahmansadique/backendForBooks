import {db} from '../drizzle/db';
import {eq} from 'drizzle-orm';
import {TableBook,TIBook, TSBook} from '../drizzle/schema';

// Get all books
export const getAllBooksService = async (limit?: number): Promise<TSBook[]> => {
    return limit ? await db.query.TableBook.findMany({ limit }) : await db.query.TableBook.findMany();
}

// Get a single book
export const getBookService = async (id: number): Promise<TSBook | undefined> => {
    return await db.query.TableBook.findFirst({
        where: eq(TableBook.id, id)
    });
}

// Create 
export const createBookService = async (data: TIBook): Promise<string> => {
    await db.insert(TableBook).values(data);
    return "Book created successfully";
}

// Update
export const updateBookService = async (id: number, data: TIBook): Promise<string> => {
    await db.update(TableBook).set(data).where(eq(TableBook.id, id));
    return "Book updated successfully";
}

// Delete
export const deleteBookService = async (id: number): Promise<string> => {
    await db.delete(TableBook).where(eq(TableBook.id, id));
    return "Book deleted successfully";
}