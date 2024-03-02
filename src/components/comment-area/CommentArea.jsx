import { useState } from "react";

import { useEffect } from "react";
import { getBookComments } from "../../api/api";
import { CommentList } from "./CommentList";
import { AddComment } from "./AddComment";

export const CommentArea = ({ open, onClose, asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments([]);
  }, [asin]);

  useEffect(() => {
    if (open && asin && comments.length === 0) {
      getBookComments(asin).then((comments) => {
        setComments(comments);
      });
    }
  }, [open, comments]);

  return (
    <>
      <div className="border border-slate-300 rounded-lg p-4">
        <div>
          <CommentList comments={comments} />
        </div>
        <AddComment onSubmit={() => setComments([])} asin={asin} />
      </div>
    </>
  );
};
