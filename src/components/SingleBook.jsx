import { useSelectedStore } from "../store/selectedBook.js";

export const SingleBook = ({ book }) => {
  const { setAsin, asin } = useSelectedStore();

  const handlerClick = () => {
    const newAsin = book.asin === asin ? undefined : book.asin;
    setAsin(newAsin);
  };

  return (
    <div>
      <div
        onClick={handlerClick}
        className={
          "border rounded-md" + (book.asin === asin ? " border-red-600" : "")
        }
      >
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
