import { Authors } from "./Authors";
import { Categories } from "./Categories";

export interface Books {
  bookId: number,
  title: string,
  author: Authors,
  category: Categories,
  inventoryid: number,
  isbn: string,
  publisherName: string,
  publicationYear: number,
  quantityAvailable: number,
  price: number
}
