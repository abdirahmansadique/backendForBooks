import {Hono} from 'hono'
import {getAllBooks,getBook , createBook, updateBook,deleteBookC} from './books.controller'

export const LibraryRouter=new Hono();
LibraryRouter.get('/books', getAllBooks);
LibraryRouter.get('/books/:id', getBook);
LibraryRouter.post('/books', createBook);
LibraryRouter.put('/books/:id',  updateBook);
LibraryRouter.delete('/books/:id', deleteBookC);