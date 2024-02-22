import { SingleBook } from "./SingleBook.jsx";
import { useContext } from "react";
import { BookContext } from "../context/BookContext.jsx";

export const AllTheBooks = () => {
  const { filterBooks } = useContext(BookContext);

  return (
    <>
      <div className="grid">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4 mx-8 mb-16">
          {filterBooks.map((book, index) => (
            <SingleBook key={index} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};
