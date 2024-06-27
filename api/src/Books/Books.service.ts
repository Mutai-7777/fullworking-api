import db from '../drizzle/db';
import { eq } from "drizzle-orm";
import { TIBooks, TSBooks } from '../drizzle/schema';
import { BooksTable } from '../drizzle/schema';

export const BooksService = async (): Promise<TSBooks[] | null> => {
    return await db.query.BooksTable.findMany();
}

export const getBooksService = async (id: number): Promise<TIBooks | undefined> => {
    return await db.query.BooksTable.findFirst({
        where: eq(BooksTable.id, id)
    });
}

// Creating a new Books
export const createBooksService = async (Books: TIBooks) => {
    await db.insert(BooksTable).values(Books);
    return { msg: "Books created successfully" };
}

// Updating Books
export const updateBooksService = async (id: number, Books: TIBooks) => {
    await db.update(BooksTable).set(Books).where(eq(BooksTable.id, id));
    return { msg: "Books updated successfully" };
}

// Deleting Books
export const deleteBooksService = async (id: number) => {
    await db.delete(BooksTable).where(eq(BooksTable.id, id));
    return { msg: "Books deleted successfully" };
}
