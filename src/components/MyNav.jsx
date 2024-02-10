export const Navbar = ({ links }) => {
  return (
    <>
      <div>
        <ul>
          {links.map((link) => (
            <li>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
