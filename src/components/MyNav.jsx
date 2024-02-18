export const Navbar = ({ links }) => {
  return (
    <div className="bg-neutral-100 py-3 shadow-xl shadow-gray-300/50 flex justify-center gap-1">
      <img
        className="h-[32px]"
        src="./public/books-study-learning-education-reading-library-svgrepo-com.svg"
        alt=""
      />
      <ul className="flex justify-center gap-5">
        {links.map((link, index) => (
          <li key={index}>
            <a href={"#" + link}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ./public/books-study-learning-education-reading-library-svgrepo-com.svg
