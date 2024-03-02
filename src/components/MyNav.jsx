import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";
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
    <div className="flex items-center gap-10 bg-neutral-100 py-3 shadow-xl shadow-gray-300/50 flex justify-center gap-1">
      <div className="flex items-center gap-3">
        <img
          className="h-[32px]"
          src="./public/books-study-learning-education-reading-library-svgrepo-com.svg"
          alt=""
        />
        <ul className="flex justify-center gap-5">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
          <Link to="/browse">
            <div>Browse</div>
          </Link>
        </ul>
      </div>
      <input
        className="rounded-lg text-center border border-slate-300 focus:outline-none focus:border-slate-600"
        onChange={handlerInput}
        type="text"
        placeholder="Cerca qui il tuo libro"
      />
    </div>
  );
};
