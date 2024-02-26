import { SingleBook } from "./SingleBook.jsx";
import { useContext } from "react";
import { BookContext } from "../context/BookContext.jsx";
import { CommentArea } from "./comment-area/CommentArea.jsx";
import { CommentList } from "./comment-area/CommentList.jsx";
import { useSelectedStore } from "../store/selectedBook.js";

export const AllTheBooks = () => {
  const { filterBooks } = useContext(BookContext);

  const asin = useSelectedStore((state) => state.asin);

  return (
    <>
      <div className="flex">
        <div className="grid">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4 mx-8 mb-16">
            {filterBooks.map((book, index) => (
              <SingleBook key={index} book={book} />
            ))}
          </div>
        </div>

        <div className="me-8">
          <CommentArea asin={asin} open={true} />
        </div>
      </div>
    </>
  );
};
