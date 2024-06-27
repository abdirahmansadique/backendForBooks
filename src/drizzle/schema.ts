import {pgTable, serial, varchar} from 'drizzle-orm/pg-core';

export const TableBook = pgTable('TableBook',{
    id: serial('id').primaryKey(),
    name: varchar('title').notNull(),
    author: varchar('author').notNull(),
    year: varchar('year').notNull()
})


//types
export type TIBook = typeof TableBook.$inferInsert;
export type TSBook = typeof TableBook.$inferSelect;