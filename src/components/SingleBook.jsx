import { useEffect } from "react";
import { useState } from "react";

export const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={"border " + (selected ? "border-red-600" : "")}
    >
      {}
      <img
        className="w-60 aspect-[5/8] object-cover m-auto"
        src={book.img}
        alt={book.title}
      />
      <div className="mx-5 mt-2">
        <h3 className="font-bold text-base">{book.title}</h3>
        <div className="my-2 flex items-center">
          <button className="items-center rounded-md bg-neutral-600 px-3 py-2 ms-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// border-red-600
