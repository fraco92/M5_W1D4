// import fantasy from "../assets/json_books/fantasy.json";
// import history from "../assets/json_books/history.json";
// import horror from "../assets/json_books/horror.json";
// import romance from "../assets/json_books/romance.json";

import { SingleBook } from "./SingleBook.jsx";

export const AllTheBooks = ({ books }) => {
  // const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

  const showBooks = books.map((book, index) => (
    // <div key={index} className="border">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4 mx-8 mb-16">
      <SingleBook key={index} book={book} />
    </div>
  ));

  return <>{showBooks}</>;
};
