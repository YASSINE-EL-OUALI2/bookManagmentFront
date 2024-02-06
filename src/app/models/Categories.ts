import { Books } from "./books";

export interface Categories {
  categoryId: number,
  categoryName: string,
  description: string,
  books: Books[]
}
