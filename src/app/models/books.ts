import { Authors } from "./Authors";
import { Categories } from "./Categories";
import { Inventory } from "./Inventory";

export interface Books {
  bookId: number,
  title: string,
  author: Authors,
  category: Categories,
  inventory: Inventory,
  isbn: string,
  publisherName: string,
  publicationDate: Date | string,
  quantityAvailable: number,
  price: number
}
