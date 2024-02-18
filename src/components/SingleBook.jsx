import { useState } from "react";
import { CommentArea } from "./comment-area/CommentArea.jsx";

export const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <div
        onClick={() => setSelected(!selected)}
        className={"border rounded-md" + (selected ? " border-red-600" : "")}
      >
        <img
          className="w-60 aspect-[5/8] object-cover m-auto"
          src={book.img}
          alt={book.title}
        />
        <div className="mx-5 mt-2">
          <h3 className="font-bold text-base text-center">{book.title}</h3>
          <div className="my-2 flex items-center"></div>
        </div>
      </div>
      <CommentArea open={selected} onClose={() => setSelected(false)} />
    </div>
  );
};
