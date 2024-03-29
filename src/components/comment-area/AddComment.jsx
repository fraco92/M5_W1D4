import { useState } from "react";
import { addBookComment, getBookComments } from "../../api/api";

export const AddComment = ({ asin, onSubmit }) => {
  const [commentInput, setCommentInput] = useState("");
  const [rateInput, setRateInput] = useState("");

  const clickHandler = async (e) => {
    e.preventDefault();
    const commentData = {
      comment: commentInput,
      rate: rateInput,
      elementId: asin,
    };
    try {
      const response = await addBookComment(commentData).then(getBookComments);
      onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="my-5 sticky top-0">
        <textarea
          onChange={(e) => setCommentInput(e.target.value)}
          className="mt-3 border rounded-md p-2"
          name="comment"
          cols="30"
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
          disabled={!asin}
          onClick={clickHandler}
          className="px-2 border rounded-md border-slate-300 focus:outline-none focus:border-slate-400 hover:bg-orange-200"
        >
          Invia commento
        </button>
      </div>
    </>
  );
};
