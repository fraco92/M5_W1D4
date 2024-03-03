import { useSelectedStore } from "../store/selectedBook.js";
import { useNavigate } from "react-router-dom";

export const SingleBook = ({ book }) => {
  const { setAsin, asin } = useSelectedStore();

  const navigateTo = useNavigate();

  const handlerClick = () => {
    const newAsin = book.asin === asin ? undefined : book.asin;
    setAsin(newAsin);
  };

  return (
    <div>
      <div
        onClick={handlerClick}
        className={
          "border hover:scale-[1.04] transition-transform duration-500 transform-gpu hover:shadow-xl cursor-pointer" +
          (book.asin === asin ? " border-red-600 border-4 scale-[1.04]" : "")
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
          <div className="my-2 flex justify-center items-center">
            <button
              type="button"
              onClick={() => navigateTo(`/details/${book.asin}`)}
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Dettagli
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
