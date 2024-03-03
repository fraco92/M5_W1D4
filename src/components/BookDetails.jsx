// import { useParams } from "react-router-dom";
// import CommentArea from "./CommentArea";
import { useSelectedStore } from "../store/selectedBook.js";
import { BookContext } from "../context/BookContext";

export const BookDetails = (book) => {
  // const param = useParams();
  const { setAsin, asin } = useSelectedStore();

  return (
    <div>
      <div className="border">
        <img
          className="w-60 aspect-[5/8] object-cover m-auto"
          src={book.img}
          alt={book.title}
        />
        <div className="mx-5 mt-2">
          <h3 className="font-bold text-sm text-center truncate">
            {book.title}
          </h3>
          <div className="my-2 flex items-center"></div>
        </div>
      </div>
    </div>
  );
};
