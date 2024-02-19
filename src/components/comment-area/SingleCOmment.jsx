export const SingleComment = ({ comment }) => {
  return (
    <li className="pb-2">
      <h4 className="font-thin text-xs pe-1">
        {comment.author} dice [{comment.createdAt}]:{" "}
      </h4>
      <p>"{comment.comment}"</p>
    </li>
  );
};
