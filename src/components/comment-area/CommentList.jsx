import { SingleComment } from "./SingleComment.jsx";

export const CommentList = ({ comments }) => {
  return (
    <ul className="overflow-y-scroll max-h-40">
      {comments.map((comment, index) => (
        <SingleComment key={index} comment={comment} />
      ))}
    </ul>
  );
};
