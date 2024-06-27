import {Hono} from 'hono'
import {getAllBooks,getBook , createBook, updateBook,deleteBookC} from './books.controller'

export const LibraryRouter=new Hono();
LibraryRouter.get('/AllBooks', getAllBooks);
LibraryRouter.get('/OneBook/:id', getBook);
LibraryRouter.post('/books', createBook);
LibraryRouter.put('/BBooks/:id',  updateBook);
LibraryRouter.delete('/del/:id', deleteBookC);