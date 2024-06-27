import { TableBook } from "../drizzle/schema";
import { getAllBooksService, getBookService,createBookService,updateBookService, deleteBookService } from './books.service'
import { Context } from "hono";

export const getAllBooks = async(c: Context) => {
    try{
        const limit = Number(c.req.query('limit'));
        const books = await getAllBooksService(limit);
        return c.json(books);
    } catch (error: any) {
        return c.json({error: error.message}, 500);
    }
}


export const getBook = async(c: Context) => {
    try {
        const id = Number(c.req.param('id'));
        const book = await getBookService(id);
        return book ? c.json(book) : c.json({error: "Book not found"}, 404);
    } catch (error: any) {
        return c.json({error: error.message}, 500);
    }
   
}


export const createBook = async(c: Context) => {
    try {
        const book = await c.req.json();
        const message = await createBookService(book);
        return c.json({message});       
        
    } catch (error: any) {
        return c.json({error: error.message}, 500);
    }
}


export const updateBook = async(c: Context) => {
    try {
        const id = Number(c.req.param('id'));
        const book = await c.req.json();
        const message = await updateBookService(id, book);
        return c.json({message});
    } catch (error: any) {
        return c.json({error: error.message}, 500);
    }
}   


export const deleteBookC = async(c: Context) => {
    try {
        const id = Number(c.req.param('id'));
        const message = await deleteBookService(id);
        return c.json({message});
        
    } catch (error: any) {
        return c.json({error: error.message}, 500);
    }
}