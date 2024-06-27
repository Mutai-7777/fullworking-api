import { Context } from "hono"
import { BooksService, getBooksService, updateBooksService, createBooksService, deleteBooksService } from "./Books.service"

export const listBooks= async ( c: Context) => { ``
  const data = await BooksService();
  if (data == null || data.length==0) {
    return c.text("hello Ian no Books found",404)

  }

  return c.json(data,200);
}

//getting Books
export const getBooks = async ( c: Context) => {
  const id = parseInt(c.req.param("id"));
  if(isNaN(id)) return c.text("Invalid ID",400) 

  const Books = await getBooksService(id);
  if (Books == undefined) {
    return c.text("user noot found",404);
}
return c.json(Books,200);
}

//creating books
export const createBooks = async ( c: Context) => {
  try {
    const  Books= await c.req.json();
    const createdBooks = await createBooksService(Books);
    if (!createdBooks) return c.text("User not created",404);
    
    return c.json(createdBooks,201);
  }
  catch (error:any) {
    return c.json({error:error?.message},400)
  }
}

//updating Books
export const updateBooks = async(c:Context) => {
      const id = Number(c.req.param("id"));
      const Books = await c.req.json();
      //search Books
      const searchedBooks = await getBooksService(id);
      if ( searchedBooks == undefined ) return c.text("User not found",404);

      //get data and update
      const res = await updateBooksService(id,Books);

      //return a success message
      if (!res) return c.text("User not updated",404);
      return c.json({msg:res},201);
}

//deleting Books
export const deleteBooks = async(c:Context) => {
      const id = Number(c.req.param("id"));
      if (isNaN(id)) return c.text("invalid Id",400);
      try{
      //search Books
      const restraunt = await getBooksService(id);
      if ( restraunt == undefined ) return c.text("User not found",404);
      //delete Books
      const res = await deleteBooksService(id);
      if (!res) return c.text("User not deleted",404);
      return c.json({msg:res},201);
      }
      catch (error:any) {
        return c.json({error:error?.message},400)
      }
}
