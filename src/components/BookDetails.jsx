import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { CommentArea } from "./comment-area/CommentArea";

export const BookDetails = () => {
  const { asin } = useParams();
  const { books } = useContext(BookContext);

  const book = books.find((book) => book.asin === asin);

  if (!book) {
    return <div>Libro non trovato</div>; // Gestione caso in cui il libro non esiste
  }

  return (
    <div className="flex content-start place-content-evenly">
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
          <p>{book.category}</p>
          <p>{book.asin}</p>
          <p>€ {book.price}</p>
          <div className="my-2 flex items-center"></div>
        </div>
      </div>
      <div className="border-none">
        <CommentArea asin={asin} open={true} />
      </div>
    </div>
  );
};
// "asin": "1940026091",
// "title": "Pandemic (The Extinction Files, Book 1)",
// "img": "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
// "price": 7.81,
// "category
