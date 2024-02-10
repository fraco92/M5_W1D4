export const Navbar = ({ links }) => {
  return (
    <div className="bg-neutral-100 py-3 shadow-xl shadow-gray-300/50">
      <ul className="flex justify-center gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <a href={"#" + link}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
