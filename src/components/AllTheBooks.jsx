// import fantasy from "../assets/json_books/fantasy.json";
// import history from "../assets/json_books/history.json";
// import horror from "../assets/json_books/horror.json";
// import romance from "../assets/json_books/romance.json";

import { useState } from "react";
import { useEffect } from "react";
import scifi from "../assets/json_books/scifi.json";

import { SingleBook } from "./SingleBook.jsx";

export const AllTheBooks = () => {
  // const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

  const [bookFilter, setBookFilter] = useState("");

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(books);
  }, []);

  const bookList = () =>
    scifi.filter((book) =>
      book.title.toLowerCase().includes(bookFilter.toLowerCase())
    );

  return (
    <>
      <div className="grid">
        <input
          className="mb-4 mx-auto rounded-md text-center border border-slate-300 focus:outline-none focus:border-slate-600"
          onChange={(e) => setBookFilter(e.currentTarget.value)}
          type="text"
          placeholder="Cerca qui il tuo libro"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4 mx-8 mb-16">
          {bookList().map((book, index) => (
            <SingleBook key={index} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};
