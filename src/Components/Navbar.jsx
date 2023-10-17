import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navItem = (
      <div className="flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#302b63] text-white" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#302b63] text-white" : ""
            }
          >
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#302b63] text-white" : ""
            }
          >
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#302b63] text-white" : ""
            }
          >
            My Cart
          </NavLink>
        </li>
      </div>
    );

  return (
    <div className="px-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-bold"
            >
              {navItem}
            </ul>
          </div>
          <div className="w-10 h-10 flex items-center">
            <img
              className=" rounded-full"
              src="https://i.ibb.co/CnpVqQp/Fashion.png"
              alt=""
            />
            <a className="btn btn-ghost normal-case text-3xl font-bold">
              Fashion and Apparel
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-bold">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
