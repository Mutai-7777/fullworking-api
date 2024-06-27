
import {z} from 'zod'

export const BooksSchema = z.object({
    id:z.number(),
    Title:z.string(),
    Author:z.string(),
    Publication:z.number(),
  
    
    })