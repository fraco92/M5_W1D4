import { BookContext } from "../context/bookContext";

export const Navbar = ({ links }) => {
  const [bookFilter, setBookFilter] = useState("");

  const bookList = () =>
    books.filter((book) =>
      book.title.toLowerCase().includes(bookFilter.toLowerCase())
    );

  return (
    <div className="flex items-center gap-5 bg-neutral-100 py-3 shadow-xl shadow-gray-300/50 flex justify-center gap-1">
      <div className="flex justify-center gap-5">
        <img
          className="h-[32px]"
          src="./public/books-study-learning-education-reading-library-svgrepo-com.svg"
          alt=""
        />
        <ul className="flex justify-center items-center gap-5">
          {links.map((link, index) => (
            <li key={index}>
              <a href={"#" + link}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <input
        className=" rounded-lg text-center border border-slate-300 focus:outline-none focus:border-slate-600"
        onChange={(e) => setBookFilter(e.currentTarget.value)}
        type="text"
        placeholder="Cerca qui il tuo libro"
      />
    </div>
  );
};

// ./public/books-study-learning-education-reading-library-svgrepo-com.svg
