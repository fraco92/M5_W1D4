/**@type {{books: any[], filterBooks: any[]}} bookTitle */

import { useEffect, useState, createContext } from "react";
import { getBooks } from "../api/api";

export const BookContext = createContext({
  books: [],
  filterBooks: [],
  setFilterBooks: undefined,
});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState([]);

  useEffect(() => {
    getBooks(books).then((books) => {
      setBooks(books);
      setFilterBooks(books);
    });
  }, []);

  return (
    <BookContext.Provider value={{ books, filterBooks, setFilterBooks }}>
      {children}
    </BookContext.Provider>
  );
};
