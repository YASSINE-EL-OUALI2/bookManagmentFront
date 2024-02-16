import { Books } from "./books";

export interface Inventory{
  inventoryId: number,
  dateAdded: Date | string,
  shelfLocation: string,
  condition: string,
  books: Books[]

}
