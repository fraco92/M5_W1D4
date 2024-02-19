import { useState } from "react";
import { addBookComment } from "../../api/api";

export const AddComment = ({ asin }) => {
  const [commentInput, setCommentInput] = useState("");
  const [rateInput, setRateInput] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(commentInput, rateInput, asin);
    addBookComment(commentInput, rateInput, asin);
  };

  return (
    <>
      <div className="my-5">
        <textarea
          onChange={(e) => setCommentInput(e.target.value)}
          className="mt-3 border rounded-md p-2"
          name="comment"
          cols="45"
          rows="3"
          placeholder="Inserisci il tuo commento"
        ></textarea>
        <div className="flex flex-col mb-2">
          <span className="text-[10pt] italic">Valutazione (1-5)</span>
          <input
            onChange={(e) => setRateInput(e.target.value)}
            className="border rounded-md max-w-10 ps-2"
            type="number"
            min="1"
            max="5"
          />
        </div>
        <button
          onClick={clickHandler}
          className="px-2 border rounded-md border-slate-300 focus:outline-none focus:border-slate-400 hover:bg-orange-200"
        >
          Invia commento
        </button>
      </div>
    </>
  );
};
