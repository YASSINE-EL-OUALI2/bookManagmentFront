import { Books } from "./books";

export interface Authors {
  authorId: number,
  authorName: string,
  biography: string,
  books: Books[]
}
