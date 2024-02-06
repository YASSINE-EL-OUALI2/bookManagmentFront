import { Books } from "./books";

export interface Inventory{
  inventoryId: number,
  dateAdded: string,
  shelfLocation: string,
  condition: string,
  books: Books[]

}
