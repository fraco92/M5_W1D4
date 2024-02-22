import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const Navbar = ({ links }) => {
  const { books, setFilterBooks } = useContext(BookContext);

  const handlerInput = (e) => {
    const filter = e.currentTarget.value;
    setFilterBooks(bookList(filter));
  };

  const bookList = (filter) =>
    books.filter((book) =>
      book.title.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div className="bg-neutral-100 py-3 shadow-xl shadow-gray-300/50 flex justify-center gap-1">
      <div>
        <img
          className="h-[32px]"
          src="./public/books-study-learning-education-reading-library-svgrepo-com.svg"
          alt=""
        />
        <ul className="flex justify-center gap-5">
          {links.map((link, index) => (
            <li key={index}>
              <a href={"#" + link}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <input
        className="mb-4 mx-auto rounded-md text-center border border-slate-300 focus:outline-none focus:border-slate-600"
        onChange={handlerInput}
        type="text"
        placeholder="Cerca qui il tuo libro"
      />
    </div>
  );
};

// ./public/books-study-learning-education-reading-library-svgrepo-com.svg
