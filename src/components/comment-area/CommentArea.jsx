import { useState } from "react";

import { useEffect } from "react";
import { getBookComments } from "../../api/api";
import { CommentList } from "./CommentList";
import { AddComment } from "./AddComment";

export const CommentArea = ({ open, onClose, asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (open && comments.length === 0) {
      getBookComments(asin).then((comments) => {
        setComments(comments);
      });
    }
  }, [open, comments]);

  return (
    <>
      <div>
        <CommentList comments={comments} />
      </div>
      <AddComment onSubmit={() => setComments([])} asin={asin} />
    </>
  );
};
