
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = ({ isDarkMode, toggleTheme, handleCheckboxChange }) => {
  const { user, logOut } = useContext(AuthContext)


  return (
    <div className="navbar md:w-11/12 mx-auto text-black ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-50 bg-white rounded-box mt-3 w-52 p-2 shadow">
            <li> <Link to="/all-marathon">Marathons</Link></li>
            <li>
              <Link to='/add-marathon'>Add Marathon</Link>
            </li>
            <li>
              <Link to='/my-marathon'>My Marathon List</Link>
            </li>
            <li>
              <Link to='/my-apply'>My Apply List</Link>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl pl-0">MARATHON</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 space-x-6 font-semibold text-base">
          <NavLink to="/all-marathon">Marathons</NavLink>
          <div className='dropdown dropdown-end z-50'>
            <button className="">Dashboard</button>

            <ul tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/add-marathon' className='justify-between'>
                  Add Marathon
                </Link>
              </li>
              <li>
                <Link to={`/my-marathon/${user?.email}`}>My Marathon List</Link>
              </li>
              <li>
                <Link to={`/my-apply/${user?.email}`}>My Apply List</Link>
              </li>


            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        {
          user?.email ?
            (<div className="flex gap-2">
              <div className="relative group">
                <img
                  className="w-9 h-9 rounded-full hover:scale-110 hover:border-2 hover:border-gray-400 "
                  src={user.photoURL}
                  alt="User Avatar"
                />
                <div className="absolute top-11 left-1/2 -translate-x-1/2 hidden group-hover:block bg-teal-800 text-white text-base rounded-md px-2 py-1">
                  {user.displayName}
                </div>
              </div>
              <button className="font-semibold py-1  px-1 md:px-2 bg-[#FFB800] rounded-md" onClick={logOut}>Logout</button>
            </div>) :
            (
              <div className="flex gap-2">
                <div>
                  <NavLink to="/login">
                    <a className="py-2 px-3 bg-[#112548] text-white rounded-md font-semibold">Login</a>
                  </NavLink>
                </div>
                <div className="md:block hidden">
                  <NavLink to="/register">
                    <a className="py-2 px-3 bg-[#112548] text-white rounded-md font-semibold">Register</a>
                  </NavLink>
                </div>
              </div>
            )
        }

        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleCheckboxChange}
          className="toggle theme-controller  m-2"
        />

      </div>
    </div>
  );
};

export default Navbar;