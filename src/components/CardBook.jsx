export const CardBook = ({ book }) => {
  return (
    <div>
      <img
        className="w-60 aspect-[5/8] object-cover m-auto"
        src={book.img}
        alt={book.title}
      />
      <div className="m-auto">
        <div>
          <h3>{book.title}</h3>
          <h4>{book.category}</h4>
          <div>{book.asin}</div>
        </div>
        <div>
          <div>{book.price}</div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
