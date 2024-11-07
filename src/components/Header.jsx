import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-center gap-10">
      <NavLink
        to="/"
        className="flex text-white items-center space-x-2 text-xl hover:text-gray-200"
      >
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/shows"
        className="flex text-white items-center space-x-2 text-xl hover:text-gray-200"
      >
        <span>Shows</span>
      </NavLink>
      <NavLink
        to="/tv"
        className="flex text-white items-center space-x-2 text-xl hover:text-gray-200"
      >
        <span>Tv</span>
      </NavLink>
    </nav>
  );
};

export default Header;