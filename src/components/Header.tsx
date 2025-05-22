import { Link, NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex items-center justify-between my-10 border-b border-b-gray-300 pb-5">
      <Link to={"/"} className="text-4xl font-bold">
        GUSTO
      </Link>
      <div className="flex gap-2 items-center text-lg font-medium text-gray-500">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-red-300" : undefined)}
        >
          Recipes
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "text-red-300" : undefined)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
