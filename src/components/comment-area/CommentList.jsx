export const CommentList = ({ comment }) => {
  return (
    <li>
      <h4>{comment.author}</h4>
      <p>{comment.comment}</p>
    </li>
  );
};
