
import { pgTable, serial, varchar, text, integer} from "drizzle-orm/pg-core";



export const BooksTable = pgTable("Books",{
    id: serial("id").primaryKey(),
    Title:text("Title").notNull(),
    Author:varchar("Author").notNull(),
    Publication: integer("Publication Year").notNull()
    

    
});

export type TIBooks = typeof BooksTable.$inferInsert;
export type TSBooks = typeof BooksTable.$inferSelect;