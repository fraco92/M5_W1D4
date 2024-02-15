// import fantasy from "../assets/json_books/fantasy.json";
// import history from "../assets/json_books/history.json";
// import horror from "../assets/json_books/horror.json";
// import romance from "../assets/json_books/romance.json";
import scifi from "../assets/json_books/scifi.json";

export const AllTheBooks = () => {
  // const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

  const showBooks = scifi.map((book, index) => (
    <div key={index} className="border">
      <img
        className="w-60 aspect-[5/8] object-cover m-auto"
        src={book.img}
        alt={book.title}
      />
      <div className="mx-5 mt-2">
        <div>
          <h3 className="font-bold text-base">{book.title}</h3>
          <h4 className="text-xs">{book.category}</h4>
          <div className="mt-1 text-xs">ASIN: {book.asin}</div>
        </div>
        <div className="my-2 flex items-center">
          <div>{book.price} €</div>
          <button className="items-center rounded-md bg-neutral-600 px-3 py-2 ms-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return <>{showBooks}</>;
};
