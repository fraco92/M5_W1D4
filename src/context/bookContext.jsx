import React, { createContext, useEffect, useState } from "react";
import { getBooks } from "../api/api.js";

export const BookContext = createContext([]);

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks(books).then((books) => {
      setBooks(books);
    });
  }, []);

  return <BookContext.Provider value={books}>{children}</BookContext.Provider>;
};
